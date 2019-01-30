import React from 'react';
import { Route,BrowserRouter, Redirect,Switch} from 'react-router-dom';
import News from './News';
import Newest from './Newest';
import Header from './Header';
import '../styles/app.css';


const App = () =>{
    return( 
        <BrowserRouter>
        <div>
          <Header className='top'/>
            <Switch>
            <Redirect exact path='/' to='/home' />
            <Route path = '/home' component = {News}/>
            <Route path = '/newest' component = {Newest}/>
            <Route component={Error} />
            </Switch>
        </div>
        </BrowserRouter>

    )
}

export default App;