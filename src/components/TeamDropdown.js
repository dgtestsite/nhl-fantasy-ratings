import React from 'react';

export default function TeamDropdown({ teams, selectedTeam, onSelectTeam }) {
  return (
    <select value={selectedTeam} onChange={e => onSelectTeam(e.target.value)}>
      <option value="">All Teams</option>
      {teams.map(team => (
        <option key={team} value={team}>{team}</option>
      ))}
    </select>
  );
}