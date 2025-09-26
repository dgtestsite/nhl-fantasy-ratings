import React from 'react';

export default function PlayerList({ players }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Player</th>
          <th>Team</th>
          <th>Rating</th>
          <th>Cap Hit ($)</th>
        </tr>
      </thead>
      <tbody>
        {players.map(player => (
          <tr key={player.name}>
            <td>{player.name}</td>
            <td>{player.team}</td>
            <td>{player.rating}</td>
            <td>{player.cap_hit.toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}