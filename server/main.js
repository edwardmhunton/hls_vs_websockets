
'use-strict';

import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.js';



var serveStatic = require('serve-static');


const app = express();
const compiler = webpack(config);


app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath
}))

app.use(serveStatic('public/', {'index': ['index.html', 'default.htm']}))
app.listen(3000)
