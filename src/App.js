import React, { useState } from 'react';
import TeamDropdown from './components/TeamDropdown';
import PlayerList from './components/PlayerList';
import TradeSuggester from './components/TradeSuggester';
import playersData from './data/nhl_players.json';

function getUniqueTeams(players) {
  return [...new Set(players.map(p => p.team))];
}

function App() {
  const [selectedTeam, setSelectedTeam] = useState('');
  const [players] = useState(playersData);

  const filteredPlayers = selectedTeam
    ? players.filter(p => p.team === selectedTeam)
    : players;

  const teams = getUniqueTeams(players);

  return (
    <div>
      <h1>NHL Fantasy Ratings</h1>
      <TeamDropdown
        teams={teams}
        selectedTeam={selectedTeam}
        onSelectTeam={setSelectedTeam}
      />
      <PlayerList players={filteredPlayers} />
      <TradeSuggester />
    </div>
  );
}

export default App;