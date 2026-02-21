# Puzzle Slider (Гра П'ятнашки)

Classic puzzle game "15-puzzle". The project was implemented using modern web technologies: React, Redux Toolkit and Tailwind CSS.
## Functionality
- Game logic: Tile moving algorithm, solvability check.

- Statistics: Tracks game time and number of moves made.

- Leaderboard: Saves best scores in LocalStorage.

- Settings: Ability to change the field size (3x3, 4x4, 5x5).

- Responsiveness: The interface is optimized for mobile and desktop devices.

- GDPR Compliance: Pop-up cookie consent window.
In the project directory, you can run:

## Technologies
- [React](https://react.dev/) — A library for building interfaces.

- [Redux Toolkit](https://redux-toolkit.js.org/) — Application state management (settings, records).

- [React Router](https://reactrouter.com/) — Navigation between pages.

- [Tailwind CSS](https://tailwindcss.com/) — A utilitarian CSS framework for styling.

- [Storybook](https://storybook.js.org/) — An environment for developing and documenting UI components.

- [JSDoc](https://jsdoc.app/) — Generating technical code documentation.
## Installation and Launch
**To run the project locally, follow these steps:**
1. Cloning the repository:

### `git clone https://github.com/IvanRak9/puzzle-slider.git`

### `cd puzzle-slider`
2. Installing dependencies:

    ### `npm install`
3. Running in development mode:

    ### `npm start`

The application will be available at http://localhost:3000.

## Configuration

The project uses several configuration files to manage styles, documentation, and build settings.

### Tailwind CSS
Global styles and theme extensions (colors, fonts) are configured in `tailwind.config.js`.
You can customize the game's appearance by modifying the `theme` section:
```javascript
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
    },
  },
  plugins: [],
}
```
### JSDoc
Configuration for generating technical documentation is located in jsdoc.json. It defines source directories and output formats.

### LocalStorage Keys
The application persists data using the browser's LocalStorage. The following keys are used:

 - puzzleSettings — Stores user preferences (grid size).

 - puzzleLeaderboard — Stores the list of best scores.

 - puzzle_slider_consent — Stores the user's GDPR cookie consent status.

To reset the game data completely, you can clear these keys in your browser's DevTools (Application > Local Storage).

## Documentation
The project implemented an expanded documentation system:

**Storybook (UI Components)**

View and test isolated components (buttons, tiles, etc.).
    
### `npm run storybook`

Open http://localhost:6006.

**JSDoc (Technical Documentation)**

Generate HTML documentation based on comments in the code.
    
### `npm run docs`

The documentation will be generated in the `docs/` folder. Open `docs/index.html` in your browser.

## Project Structure
     /components/ - UI components (Button, Tile, Modal, GDPR)
     /hooks/ - Custom hooks (useGameLogic)
     /pages/ - Pages (Start, Game, Settings, Leaderboard)
     /store/ - Redux slices та конфігурація store
     /stories/ - Story files for Storybook
     /App.js - Main component with routing
## License
This project is distributed under the MIT license. See the [LICENSE](LICENSE) file for details.

The license check report for third-party libraries is located in the `license_report.txt` file.
## Author
**IvanRak9**
- [GitHub](https://github.com/IvanRak9) :IvanRak9
