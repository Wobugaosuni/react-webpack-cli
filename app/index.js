import React from 'react';
import { render } from 'react-dom';

import 'normalize.css';
import './common/stylus/index.styl'; // 引入公共样式

import Todo from './containers/Todo';

// 性能检测
import Perf from 'react-addons-perf';

/* eslint-disable no-undef */
if (__DEV__) {
  /* eslint-disable semi */
  window.Perf = Perf
}


render (
  <Todo />,
  document.getElementById('root')
);
