import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import GetPassword from './Pages/GetPassword';
import Queue from './Pages/UserQueue';
import Manager from './Pages/ManagerQueue';
import FollowQueue from './Pages/FollowQueue'

function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ GetPassword } />
          <Route exact path="/queue" component={ Queue } />
          <Route exact path="/manager" component={ Manager } />
          <Route exact path="/followqueue" component={ FollowQueue } />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
