import React, { useState } from 'react';

const Table = ({ columns, data, actionButtons, itemsPerPage, onDelete }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const paginatedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="w-full overflow-x-auto ">
      <table className="table min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {columns.map((column) => (
              <th
                key={column.accessor}
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {column.Header}
              </th>
            ))}
            {actionButtons && actionButtons.length > 0 && (
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Actions
              </th>
            )}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {paginatedData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column) => (
                <td key={column.accessor} className="px-6 py-4 whitespace-nowrap">
                  {row[column.accessor]}
                </td>
              ))}
              {actionButtons && actionButtons.length > 0 && (
                <td className="px-6 py-4 whitespace-nowrap space-x-2">
                  {actionButtons.map((button, buttonIndex) => {
                    if (button.label === 'Delete') {
                      return (
                        <button
                          key={buttonIndex}
                          onClick={() => onDelete(row)}
                          className="text-red-600 hover:text-red-900"
                        >
                          {button.label}
                        </button>
                      );
                    }
                    return (
                      <a
                        key={buttonIndex}
                        href={button.url(row)}
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        {button.label}
                      </a>
                    );
                  })}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => handleClick(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 text-sm text-white bg-indigo-600 rounded disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => handleClick(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 text-sm text-white bg-indigo-600 rounded disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    </div>
  );
};
export default Table;
