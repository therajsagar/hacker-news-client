import React from 'react';
import { Route, BrowserRouter, Redirect, Switch } from 'react-router-dom';
import News from './News';
import Newest from './Newest';
import Header from './Header';
import '../styles/app.css';

export default function() {
  return (
    <BrowserRouter>
      <div className='contents'>
        <Header className='top' />
        <Switch>
          <Redirect exact path='/' to='/news' />
          <Route path='/news' component={News} />
          <Redirect path='/newStories' to='/newest' />
          <Route path='/newest' component={Newest} />
          <Route component={Error} />
        </Switch>
        <hr />
      </div>
    </BrowserRouter>
  );
}
