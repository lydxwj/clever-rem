import React from 'react';
import ReactDOM from 'react-dom';
import {Rem} from '../src/index.js';
Rem(750);
// import Rem from '../src/index.js';
// Rem(750);
import './main.styl'
ReactDOM.render(
  <div className="clever">
    <h2>移动端响应式布局</h2>
    <p>配合stylus使用更佳</p>
    <p>默认设计稿宽度750</p>
    <p>主要使用宽度去适配，设备尺寸和比例太多，宽高都去适配会导致页面变形</p>
    <p>详细使用查看README.md</p>
  </div>, document.getElementById('app'));