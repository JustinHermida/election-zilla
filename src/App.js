import React from 'react';
import './App.css';

import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { appStore } from './stores/appStore'

import { Layout } from './components/Layout'
import { HomePage } from './components/HomePage'
import { BallotPage } from './components/BallotPage'
import { NewElectionsPage } from "./components/NewElectionsPage";
import { VoterToolContainer } from './containers/VoterToolContainer';
import { ViewElectionsResultsPage } from "./components/ViewElectionsResultsPage";

function App() {
  return (
    <Router>
      <Layout>
        <Provider store={appStore}>
          <Switch>
              <Route path="/" exact>
                <HomePage />
              </Route>
              <Route path="/ballots/:id" exact>
                <BallotPage />
              </Route>
              <Route path="/voter-registration">
                <div>Voter Registration Component Goes Here.</div>
              </Route>
              <Route path="/view-voters">
                <VoterToolContainer />
              </Route>
              <Route path="/view-results">
                <div>View Results Component Goes Here.</div>
                  <ViewElectionsResultsPage />
              </Route>
              <Route path="/new-election">
                <div>New Election Component Goes Here.</div>
                  <NewElectionsPage />
              </Route>
            </Switch>
        </Provider>
      </Layout>
    </Router>
  );
}

export default App;
