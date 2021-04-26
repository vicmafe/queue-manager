import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import GetPassword from './Pages/GetPassword';
import Queue from './Pages/ManagerQueue';
import Manager from './Pages/ManagerQueue';

function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ GetPassword } />
          <Route exact path="/queue" component={ Queue } />
          <Route exact path="/manager" component={ Manager } />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
