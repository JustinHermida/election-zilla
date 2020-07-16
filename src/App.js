import React from 'react';
import './App.css';

import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { appStore } from './stores/appStore'

import { Layout } from './components/Layout'
import { Home } from './components/Home'
import { NewElectionsPage } from "./components/NewElectionsPage";
import { VoterToolContainer } from './containers/VoterToolContainer';
import { VoterFormContainer } from './containers/VoterFormContainer';
import {ViewElections} from "./components/ViewElections";
import {ViewElectionResults} from "./components/ViewElectionResults";
import {ViewElectionsResultsPage} from "./components/ViewElectionsResultsPage";

function App() {
  return (
    <Router>
      <Layout>
        <Provider store={appStore}>
          <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/voter-registration">
              <VoterFormContainer />
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
