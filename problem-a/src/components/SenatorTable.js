import React from 'react';
import TableHeader from './TableHeader';
import SenatorRow from './SenatorRow';

function SenatorTable({ senatorsList }) {
  const columnNames = ['Name', 'State', 'Phone', 'Twitter'];

  return (
    <table className="table table-bordered">
      <TableHeader columnNames={columnNames} />
      <tbody>
        {senatorsList.map(senator => (
          <SenatorRow key={senator.id} senatorData={senator} />
        ))}
      </tbody>
    </table>
  );
}

export default SenatorTable;