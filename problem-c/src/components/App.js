import React, { useState } from 'react';
import GameDataTable from './GameDataTable';
import TeamSelectForm from './TeamSelectForm';

function App(props) {
  const [filterCriteria, setFilterCriteria] = useState({ teamName: '', includeRunnerUps: false });

  const applyFilter = (teamName, includeRunnerUps) => {
    setFilterCriteria({ teamName, includeRunnerUps });
  };
  let displayedData = props.gameData;
  if (filterCriteria.teamName !== '') {
    displayedData = displayedData.filter((gameObj) => {
      return gameObj.winner === filterCriteria.teamName || 
             (filterCriteria.includeRunnerUps && gameObj.runner_up === filterCriteria.teamName);
    });
  }
  const uniqueTeamNames = [...new Set(props.gameData.reduce((all, current) => {
    return all.concat([current.winner, current.runner_up]);
  }, []))].sort();

  return (
    <div className="container">
      <header className="mb-3">
        <h1>FIFA World Cup Finals</h1>
      </header>
    
      <main>
        <TeamSelectForm teamOptions={uniqueTeamNames} applyFilterCallback={applyFilter} />
        <GameDataTable data={displayedData} />
      </main>

      <footer>
        <small>Data from <a href="https://en.wikipedia.org/wiki/List_of_FIFA_World_Cup_finals">Wikipedia</a>.</small>
      </footer>
    </div>
  );
}

export default App;