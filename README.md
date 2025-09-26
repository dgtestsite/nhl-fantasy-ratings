# NHL Fantasy Ratings

A React web app to view NHL player fantasy ratings, salary cap hits, filter by team, and propose trades that fit under the NHL salary cap.

## Features
- View player ratings out of 100 (based on fantasy stats)
- Filter players by team (dropdown)
- See each player's NHL salary cap hit
- Propose trades (multi-team), ensuring all teams stay under the salary cap

## Getting Started

1. Clone the repo:
   ```sh
   git clone https://github.com/dgtestsite/nhl-fantasy-ratings.git
   cd nhl-fantasy-ratings
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Run the app locally:
   ```sh
   npm start
   ```

## Project Structure
- `src/data/nhl_players.json`: Sample player data
- `src/components/TeamDropdown.jsx`: Team dropdown UI
- `src/components/PlayerList.jsx`: Player list UI
- `src/components/TradeSuggester.jsx`: Trade proposal tool

## Next Steps
- Add more player data to `src/data/nhl_players.json`
- Build out trade logic in `TradeSuggester.jsx`
- Connect to a real NHL data source if available
