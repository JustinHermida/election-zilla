import React from 'react';
import './App.css';

import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import {electionStore} from './stores/electionStore'

import {Layout} from './components/Layout'
import {Home} from './components/Home'
import {NewElection} from "./components/NewElection";

function App() {

  return (
    <Router>
      <Layout>
        <Provider store={electionStore}>
          <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/voter-registration">
                <div>Voter Registration Component Goes Here.</div>
              </Route>
              <Route path="/view-voters">
                <div>View Voters Component Goes Here.</div>
              </Route>
              <Route path="/view-voters">
                <div>View Voters Component Goes Here.</div>
              </Route>
              <Route path="/view-results">
                <div>View Results Component Goes Here.</div>
              </Route>
              <Route path="/new-election">
                <div>New Election Component Goes Here.</div>
                  <NewElection />
              </Route>
            </Switch>
        </Provider>
      </Layout>
    </Router>
  );
}

export default App;
