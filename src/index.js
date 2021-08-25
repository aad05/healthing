import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Root} from './root'
import { Generic } from './View/Generic';

ReactDOM.render(
  <React.StrictMode>
    <Root />
    <Generic />
  </React.StrictMode>,
  document.getElementById('root')
);
