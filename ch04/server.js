// Access with `http://localhost:9000/weback-dev-server/` for hot reloading.

let webpack = require('webpack');
let WebpackDevServer = require('webpack-dev-server');
let config = require('./webpack.config');

new WebpackDevServer (webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: false
}).listen(9000, 'localhost',
  function (err, result) {
    if (err) {
      console.log(err);
    }
    console.log('Listening at localhost:9000');
  });
