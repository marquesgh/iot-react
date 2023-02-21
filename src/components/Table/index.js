import PropTypes from 'prop-types';
import React from 'react';
import './Table.css';

function Table({ title, columns, data }) {
  return (
    <table>
      <thead>
        <tr>
          <th colSpan={columns.length}>{title}</th>
        </tr>
        <tr>
          {columns.map((column, index) => (
            <th key={index}>{column.name}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {columns.map(function (column, index) {
              if (column.key === 'status') {
                return (
                  <td key={column.key + index}>
                    <span
                      className={`badge ${
                        row[column.key] === 'critical' ? 'bg-warning' : 'bg-critical'
                      }`}
                    >
                      {row[column.key]}
                    </span>
                  </td>
                );
              } else {
                return <td key={column.key + index}>{row[column.key]}</td>;
              }
            })}
          </tr>
        ))}
      </tbody>
      <tfoot>
        {data.length === 0 && (
          <tr>
            <td>No data to display.</td>
          </tr>
        )}
      </tfoot>
    </table>
  );
}

Table.propTypes = {
  title: PropTypes.string.isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  data: PropTypes.array.isRequired,
};

export default Table;
