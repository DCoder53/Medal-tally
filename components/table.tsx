"use client";
import React from 'react';

const BasicTable: React.FC = () => {
  const data = [
    { id: 1, name: 'John Doe', age: 28, occupation: 'Developer' },
    { id: 2, name: 'Jane Smith', age: 34, occupation: 'Designer' },
    { id: 3, name: 'Sam Johnson', age: 23, occupation: 'Manager' },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 shadow-lg rounded-lg">
          <thead>
            <tr className="bg-gray-200 text-gray-700 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">country</th>
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Age</th>
              <th className="py-3 px-6 text-left">Occupation</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {data.map((item) => (
              <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left whitespace-nowrap">{item.id}</td>
                <td className="py-3 px-6 text-left">{item.name}</td>
                <td className="py-3 px-6 text-left">{item.age}</td>
                <td className="py-3 px-6 text-left">{item.occupation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BasicTable;
