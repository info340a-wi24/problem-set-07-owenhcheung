import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import senatorsList from './data/senators.json'; 

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App senatorsList={senatorsList} />); 
