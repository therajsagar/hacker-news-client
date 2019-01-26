import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import  App from './components/App.jsx';

const Main = () => <div><App/> </div>


ReactDOM.render(<Main />, document.getElementById('root'));


if(module.hot){
    module.hot.accept()
}
