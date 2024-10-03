import React, { useEffect, useState, useRef } from 'react';
import { FaChevronDown, FaMedal, FaMapMarkerAlt } from 'react-icons/fa';

interface OlympicDropdownProps {
  onYearChange: (year: number) => void;
  selectedYear: number;
}

const OlympicDropdown: React.FC<OlympicDropdownProps> = ({ onYearChange, selectedYear }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const olympicYears = [
    { year: 2024, location: 'Paris', season: 'Summer' },
    { year: 2021, location: 'Tokyo', season: 'Summer' },
    { year: 2016, location: 'Rio de Janeiro', season: 'Summer' },
    { year: 2012, location: 'London', season: 'Summer' },
    { year: 2008, location: 'Beijing', season: 'Summer' },
    { year: 2004, location: 'Athens', season: 'Summer' },
    { year: 2000, location: 'Sydney', season: 'Summer' },
    { year: 1996, location: 'Atlanta', season: 'Summer' },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelectYear = (year: any) => {
    if (year.year !== selectedYear) { // Only select if the year is different
      onYearChange(year.year); // Pass the selected year to the parent component
    }
    setIsOpen(false);
  };

  const selectedOlympics = olympicYears.find((year) => year.year === selectedYear);

  return (
    <div className="relative w-full max-w-md mx-auto font-sans" ref={dropdownRef}>
      <button
        className="flex items-center justify-between w-auto min-w-[200px] h-12 px-4 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-200"
        onClick={toggleDropdown}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        {selectedOlympics ? `${selectedOlympics.year} Olympics` : 'Select Year'}
        <FaChevronDown className={`ml-2 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <ul
          className="absolute z-10 w-auto min-w-[200px] mt-2 bg-white rounded-lg shadow-lg max-h-80 overflow-auto"
          role="listbox"
        >
          {olympicYears.map((olympics) => (
            <li
              key={olympics.year}
              className={`px-4 py-3 cursor-pointer hover:bg-gray-100 focus:bg-gray-100 focus:outline-none ${selectedYear === olympics.year ? 'bg-blue-100' : ''}`}
              onClick={() => handleSelectYear(olympics)}
              role="option"
              aria-selected={selectedYear === olympics.year}
              tabIndex={0}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <FaMedal className={`mr-3 ${olympics.season === 'Summer' ? 'text-yellow-500' : 'text-blue-400'}`} />
                  <span className="text-gray-600">{olympics.year}</span>
                </div>
              </div>
              <div className="mt-1 text-sm text-gray-500 flex items-center">
                <FaMapMarkerAlt className="mr-1" />
                <span>{olympics.location}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OlympicDropdown;
