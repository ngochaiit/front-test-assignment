import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';

import { Collection } from './pages/collection/collection';
import { CreateCard } from './pages/create-card/CreateCard';

const App = () => (
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <Router>
      <Switch>
        <Route exact path="/collection" component={Collection} />
        <Route exact path="/create-card" component={CreateCard} />
      </Switch>
    </Router>
  </LocalizationProvider>
);

render(<App />, document.getElementById('root'));
