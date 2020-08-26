# logan-react
A React version of Logan

## Setup

Install lerna globally: `npm i -g lerna`

## Development Instructions

### Node modules

Clean node modules: `npm run clean-all`

Reinstall node modules: `npm run bootstrap`

Bootstrap for production: `npm run bootstrap:production`

### Package installation

Install a package _globally:_ `npm i <pkg> --save` or `npm i <pkg> --save-dev`

Install a package in a specific module: `lerna add --scope=<internal pkg> <package> [--dev] --no-bootstrap`
