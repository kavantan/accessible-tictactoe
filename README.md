# Accessible Tictactoe

Accessible Tictactoe is a multiplayer platform game that provides accessibility for persons-with-disabilities.

## Setup Instructions

Clone down this repository. You will need `node` and `npm` installed globally on your machine.

### Client Side

Switch to Client Side (frontend) Directory:

`cd frontend`

Installation:

`npm install`

To Start Client:

`npm start`

To Visit App:

`localhost:3000/`

### Server Side

Switch to Server Side (backend) Directory:

`cd backend`

Installation:

`npm install`

To Start Server:

`npm start`

## Design Decisions

### Creating and Joining Room

By generating pseudo-random room IDs, users who wish to play tictactoe with each other are able to join the same private room and play one (or more) game(s).

### Screenreader Accessibility

By adding aria labels (and roles) to HTML elements, screenreader devices are able to narrate over the elements of the webpage.

### Colour Contrast

By ensuring that the contrast ratio between text and background is high enough, allows texts to be read more easily.

## Author

[kavantan](https://github.com/kavantan)
