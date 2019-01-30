import React from 'react';
import {BrowserRouter, Route, Redirect, Link,Switch} from 'react-router-dom';
import News from './News';
import Newest from './Newest';
import Header from './Header';
import '../styles/app.css';


const App = () =>{
    return( <div>
        <Header className='top'/>
        <BrowserRouter>
        <div>
        <ul className='top'>
                <li>
                    <Link to ='/home'><h3>Hacker News</h3></Link>
                </li>
                <li>
                    <Link to='/newest'><h3>new</h3></Link>
                </li>
            </ul>
            <Switch>
            <Redirect exact path='/home' to='/' />
            <Route path = '/' component = {News}/>
            <Route path = '/newest' component = {Newest}/>
            <Route component={Error} />
            </Switch>
        </div>
       </BrowserRouter>
       </div>)
}

export default App;