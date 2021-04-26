import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import GlobalStyle from './Style';
import GetPassword from './Pages/GetPassword';
import Queue from './Pages/ManagerQueue';
import Manager from './Pages/ManagerQueue';

function App() {
  return (
    <GlobalStyle>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ GetPassword } />
          <Route exact path="/queue" component={ Queue } />
          <Route exact path="/managerqueue" component={ Manager } />
        </Switch>
      </BrowserRouter>
    </GlobalStyle>
  );
}

export default App;
