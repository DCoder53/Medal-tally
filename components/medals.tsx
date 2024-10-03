'use client'
import React, { useEffect, useState, useRef } from 'react';
import Papa from 'papaparse';
import OlympicDropdown from './DropDown';
import { FaChevronDown } from 'react-icons/fa';

const Medals: React.FC = () => {
  const [data, setData] = useState<any[]>([]);
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedSort, setSelectedSort] = useState<string>('Total');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isSortOpen, setIsSortOpen] = useState<boolean>(false);
  const [selectedSortOption, setSelectedSortOption] = useState<string>('Total');
  const [selectedYear, setSelectedYear] = useState<number>(2024); // Default to 2024

  const sortOptions = [
    { label: 'Gold', value: 'Gold' },
    { label: 'Silver', value: 'Silver' },
    { label: 'Bronze', value: 'Bronze' },
    { label: 'Total', value: 'Total' }
  ];

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsSortOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const fetchCsvData = async () => {
      if (!selectedYear) {
        setLoading(false); // Stop loading if no year is selected
        return;
      }

      setLoading(true);
      try {
        const response = await fetch(`/Tally/${selectedYear}.csv`);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

        const result = await response.text();
        Papa.parse(result, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => {
            console.log('CSV data fetched:', results.data); // Debugging line
            setData(results.data);
            setFilteredData(results.data);
            setLoading(false);
          },
          error: (err: { message: React.SetStateAction<string | null>; }) => {
            console.error('CSV parsing error:', err.message); // Debugging line
            setError(err.message);
            setLoading(false);
          }
        });
      } catch (err) {
        console.error('Fetch error:', (err as Error).message); // Debugging line
        setError((err as Error).message);
        setLoading(false);
      }
    };

    fetchCsvData();
  }, [selectedYear]);

  useEffect(() => {
    if (data.length === 0) return;

    const filtered = data.filter((item) =>
      item.country.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const sortedData = filtered.sort((a, b) => {
      const aValue = parseInt(a[selectedSort], 10);
      const bValue = parseInt(b[selectedSort], 10);
      if (aValue > bValue) return -1;
      if (aValue < bValue) return 1;
      return 0;
    });

    setFilteredData(sortedData);
  }, [selectedSort, searchQuery, data]);

  const handleSortOptionClick = (option: string) => {
    setSelectedSortOption(option);
    setSelectedSort(option);
    setIsSortOpen(false);
  };

  const handleYearChange = (year: number) => {
    if (year !== selectedYear) { // Only update if the year is different
      setSelectedYear(year);
      setLoading(true); // Set loading to true only when year changes
      setError(null); // Reset error when year changes
    }
  };

  if (loading) return <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">Loading...</div>;
  if (error) return <div className="flex items-center justify-center min-h-screen bg-gray-900 text-red-500">Error: {error}</div>;

  return (
    <div className="p-6 bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-4xl relative">
        <h1 className="text-3xl font-extrabold text-center mb-8 text-white">Olympic Medals Tally</h1>
        
        <div className="mb-4 flex justify-between items-center">
          <input
            type="text"
            placeholder="Search by country"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-1/3 px-4 py-2 border rounded bg-gray-800 text-white"
          />
          <div className="flex items-center space-x-5">
            <OlympicDropdown onYearChange={handleYearChange} selectedYear={selectedYear} />
            <div className="relative" ref={dropdownRef}>
              <button
                className="flex items-center justify-between px-4 py-2 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-200"
                onClick={() => setIsSortOpen(!isSortOpen)}
                aria-haspopup="listbox"
                aria-expanded={isSortOpen}
              >
                {selectedSortOption}
                <FaChevronDown className={`ml-2 transition-transform duration-200 ${isSortOpen ? 'transform rotate-180' : ''}`} />
              </button>
              {isSortOpen && (
                <ul className="absolute z-10 w-full mt-2 bg-white rounded-lg shadow-lg max-h-80 overflow-auto">
                  {sortOptions.map((option) => (
                    <li
                      key={option.value}
                      className={`px-4 py-3 text-gray-600 cursor-pointer hover:bg-gray-100 focus:bg-gray-100 focus:outline-none ${selectedSortOption === option.value ? 'bg-blue-100' : ''}`}
                      onClick={() => handleSortOptionClick(option.value)}
                    >
                      {option.label}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full bg-gray-800 border border-gray-700 shadow-lg rounded-lg">
            <thead>
              <tr className="bg-gray-700 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">Country</th>
                <th className="py-3 px-6 text-center">Gold</th>
                <th className="py-3 px-6 text-center">Silver</th>
                <th className="py-3 px-6 text-center">Bronze</th>
                <th className="py-3 px-6 text-center">Total</th>
              </tr>
            </thead>
            <tbody className="text-gray-300 text-sm font-light">
              {filteredData.map((item, index) => (
                <tr key={index} className="border-b border-gray-700 hover:bg-gray-600 transition duration-300">
                  <td className="py-3 px-6 flex items-center">
                    <img 
                      src={`/Flags/${item.country}.gif`} 
                      alt={item.country_code} 
                      className="w-6 h-4 mr-2 rounded"
                    />
                    <span>{item.country}</span>
                  </td>
                  <td className="py-3 px-6 text-center">{item.Gold}</td>
                  <td className="py-3 px-6 text-center">{item.Silver}</td>
                  <td className="py-3 px-6 text-center">{item.Bronze}</td>
                  <td className="py-3 px-6 text-center">{item.Total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Medals;
