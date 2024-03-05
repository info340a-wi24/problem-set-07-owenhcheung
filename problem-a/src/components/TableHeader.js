import React from 'react';

function TableHeader({ columnNames }) {
  return (
    <thead>
      <tr>
        {columnNames.map(columnName => (
          <th key={columnName}>{columnName}</th>
        ))}
      </tr>
    </thead>
  );
}

export default TableHeader;