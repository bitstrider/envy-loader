[![npm][npm]][npm-url]
[![node][node]][node-url]
[![deps][deps]][deps-url]

# envy-loader

dotenv style environment variable file loader module for webpack

## Install

```bash
npm install --save-dev envy-loader
```

## Usage
Same as with most other webpack loaders:

### Configuration (recommended)

```js
/* webpack.config.js */

module.exports = {
  module: {
    rules: [
      {
        test: /\.env$/,
        use: 'envy-loader'
      }
    ]
  }
}
```

```js
import env from 'development.env';
```

### CLI

```bash
webpack --module-bind 'env=envy-loader'
```

### Inline

```js
import env from 'envy-loader!production.env';
```

[npm]: https://img.shields.io/npm/v/envy-loader.svg
[npm-url]: https://npmjs.com/package/envy-loader

[node]: https://img.shields.io/node/v/envy-loader.svg
[node-url]: https://nodejs.org

[deps]: https://david-dm.org/bitstrider/envy-loader.svg
[deps-url]: https://david-dm.org/bitstrider/envy-loader
