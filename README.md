# Atlys Assignment

This is a React project for the Atlys Assignment. The project demonstrates a simple application that calculates the output of a series of mathematical equations applied to an initial value.

## Project Structure

```
.gitignore
package.json
public/
	index.html
	manifest.json
	robots.txt
README.md
src/
	App.css
	App.js
	components/
		card/
			cards.js
			cards.module.css
		connectors/
			curve.js
			index.module.css
			line.js
			sCurve.js
			sideCurve.js
		input/
			input.js
			input.module.css
		views.js
		views.module.css
	index.css
	index.js
	reportWebVitals.js
	setupTests.js
	util/
		util.js
```

## Getting Started

### Prerequisites

- Node.js (>= 14.x)
- npm (>= 6.x)

### Installation

1. Clone the repository:

```sh
git clone https://github.com/devyadav0512/atlys.git
cd atlys
```

2. Install the dependencies:

```sh
npm install
```

### Running the Application

To start the application in development mode, run:

```sh
npm start
```

This will start the development server and open the application in your default web browser.

### Building the Application

To build the application for production, run:

```sh
npm run build
```

This will create a `build` directory with the production build of the application.

### Running Tests

To run the tests, use:

```sh
npm test
```

## Project Details

### Components

- App.js: The main component that renders the Viewscomponent.
- views.js: Contains the main logic for rendering the input,cards, and connectors.
- cards.js: Renders individual cards with input fields for equations.
- input.js: Renders input fields for the initial value and final output.
- curve.js, line.js, sCurve.js, sideCurve.js: Render different types of SVG connectors.

### Utilities

- util.js: Contains the CalculateOutput function that calculates the output based on the initial value and a series of equations.

### Styles

- CSS modules are used for styling individual components.
- Global styles are defined in index.css.

## Configuration

- manifest.json: Configuration for the web app manifest.
- index.html: The main HTML file for the application.
- .gitignore: Specifies files and directories to be ignored by Git.

## License

This project is licensed under the MIT License.

## Acknowledgements

- [React](https://reactjs.org/)
- [Create React App](https://create-react-app.dev/)

---
