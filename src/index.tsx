import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Collection } from './pages/collection/collection';
import { CreateCard } from './pages/create-card/CreateCard';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/collection" component={Collection} />
      <Route exact path="/create-card" component={CreateCard} />
    </Switch>
  </Router>
);

render(<App />, document.getElementById('root'));
