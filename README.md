# NHL Fantasy Ratings

A React web app to view NHL player fantasy ratings, salary cap hits, filter by team, and propose trades that fit under the NHL salary cap.

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

## Deploying to Vercel

- Go to [Vercel](https://vercel.com/), import your GitHub repo, and deploy.
- Vercel will auto-detect React and publish your site.

## Project Structure
- `src/data/nhl_players.json`: Sample player data
- `src/components/TeamDropdown.js`: Team dropdown UI
- `src/components/PlayerList.js`: Player list UI
- `src/components/TradeSuggester.js`: Trade proposal tool