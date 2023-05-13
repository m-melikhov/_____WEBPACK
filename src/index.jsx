import * as $ from 'jquery';

import Post from "@model/post";

import '@css/styles.css';
import './less/styles.less';
import './sass/styles.sass';
import './sass/styles.scss';

import logo from '@assets/icon-square.png';
import xml from '@assets/data.xml';

import '@model/lodash';

const post = new Post('Webpack Post Title', logo);

// console.log('Post to string:', post.toString());
$('pre').addClass('code').html(post.toString());

console.log('XML', xml);

async function start() {
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve(('ASync done'))
    }, 3000)
  })
}

start().then(console.log)

import React from 'react';
import * as ReactDOM from 'react-dom/client';

const App = () => (
  <div class="container">
    <h1>Webpack training</h1>
    <div class="logo" />
    <pre />
    <div class="less">
      <h2>Less Title</h2>
    </div>
    <div class="scss">
      <h2>Scss Title</h2>
    </div>
    <div class="sass">
      <h2>Sass Title</h2>
    </div>
  </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<App />)