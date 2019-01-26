import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import  Content from './components/Content.jsx';

const App = () => <div><Content/> </div>


ReactDOM.render(<App />, document.getElementById('root'));


if(module.hot){
    module.hot.accept()
}
