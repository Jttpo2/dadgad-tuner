import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import ReactGa from 'react-ga';

const googleAdsTag = 'UA-96349007-2';
ReactGa.initialize(googleAdsTag);
ReactGa.pageview(window.location.pathName + window.location.search);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
