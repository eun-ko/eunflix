import React from 'react';
import ReactDOM from 'react-dom';

import App from './Components/App';
import './api';
//테스트하기위해서 api임포트 내 request를 network에서 볼 수 있음
ReactDOM.render(<App />, document.getElementById('root'));
