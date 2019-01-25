import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header';
import  Content from './Content';

const App = () => <div>
    <Header/>
<Content/>
</div>


ReactDOM.render(<App />, document.getElementById('root'));

/*
if(module.hot){
    module.hot.accept()
}
*/