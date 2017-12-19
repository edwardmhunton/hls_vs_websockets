
//import  './jsmpeg.min.js';
//import './video.min.js';
//import './hls_player.js';



import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import App from './App.js';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

//import './videojs-contrib-hls.js';

//import './canvas.js';


render(
   <App />,
    document.getElementById('app')
)
