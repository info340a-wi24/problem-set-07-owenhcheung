import React, { useState } from 'react';
import _ from 'lodash';

export default function GameDataTable(props) {
  const [sortByCriteria, setSortByCriteria] = useState(null);
  const [isAscending, setIsAscending] = useState(null);

  const handleClick = (event) => {
    const clickedCriteria = event.currentTarget.name;

    if (sortByCriteria !== clickedCriteria) {
      setSortByCriteria(clickedCriteria);
      setIsAscending(true);
    } else {
      setIsAscending((prevIsAscending) => {
        if (prevIsAscending === null || prevIsAscending === false) {
          return true;
        } else {
          return false;
        }
      });
    }
  };

  let sortedData = _.sortBy(props.data, sortByCriteria);
  if (sortByCriteria && !isAscending) {
    sortedData = _.reverse(sortedData);
  }

  const gameRows = sortedData.map((gameObj) => (
    <GameDataRow key={gameObj.year} gameObj={gameObj} />
  ));

  return (
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th>
              Year
              <SortButton
                name="year"
                active={sortByCriteria === 'year'}
                ascending={sortByCriteria === 'year' && isAscending}
                onClick={handleClick}
              />
            </th>
            <th className="text-end">
              Winner
              <SortButton
                name="winner"
                active={sortByCriteria === 'winner'}
                ascending={sortByCriteria === 'winner' && isAscending}
                onClick={handleClick}
              />
            </th>
            <th className="text-center">
              Score
              <SortButton
                name="score"
                active={sortByCriteria === 'score'}
                ascending={sortByCriteria === 'score' && isAscending}
                onClick={handleClick}
              />
            </th>
            <th>
              Runner-Up
              <SortButton
                name="runner_up"
                active={sortByCriteria === 'runner_up'}
                ascending={sortByCriteria === 'runner_up' && isAscending}
                onClick={handleClick}
              />
            </th>
          </tr>
        </thead>
        <tbody>
          {gameRows}
        </tbody>
      </table>
    </div>
  );
}

function SortButton(props) {
  let iconClasses = "";
  if (props.active) {
    iconClasses += " active";
  }
  if (props.ascending !== null) {
    iconClasses += props.ascending ? "" : " flip";
  }

  return (
    <button className="btn btn-sm btn-sort" name={props.name} onClick={props.onClick}>
      <span className={"material-icons" + iconClasses} aria-label={`sort by ${props.name}`}>sort</span>
    </button>
  );
}

function GameDataRow({ gameObj }) {
  return (
    <tr>
      <td>{gameObj.year}</td>
      <td className="text-end">{gameObj.winner} {gameObj.winner_flag}</td>
      <td className="text-center">{gameObj.score}</td>
      <td>{gameObj.runner_up_flag}&nbsp;&nbsp;{gameObj.runner_up}</td>
    </tr>
  );
}