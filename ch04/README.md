# React.js by Example Ch04

## Usage

To manually build invoke the following command.
```
./node_modules/.bin/webpack
```
You can also use the hot reloading using the webpack-dev-server by simply
invoking `npm start` and access `http://localhost:9000/weback-dev-server/`.


## How Ch04 Project was Created

### Setup

1. Initialize
```
npm init -y
```

1. Developer Tools
```
npm install webpack --save-dev
npm install webpack-dev-server --save-dev
npm install react-hot-loader --save-dev
```

1. libs
```
npm install jquery --save
```

1. React
```
npm install react react-dom --save
npm install @types/react @types/react-dom --save-dev
```

1. TypeScript
```
npm install typescript awesome-typescript-loader source-map-loader --save-dev
```

1. ESLint --- has not setup yet.

### Files

```
build/            --- TypeScript target Directory
src/              --- TypeScript sources
asset/            --- Stores generated files by webpack including bundle.js.
index.html        --- The top page that loads bundle.js
package.json      --- npm configuration
tsconfig.json     --- TypeScript compiler configuration
webpack.config.js --- webpack configuration
server.js         --- The server program for the hot reloading webpack-dev-server
                      during the development
```
