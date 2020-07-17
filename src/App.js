import React from 'react';
import './App.css';

import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import {appStore} from './stores/appStore'

import { BallotContainer } from './containers/BallotContainer'
import { ElectionFormContainer } from "./containers/ElectionFormContainer";
import { ElectionsContainer } from './containers/ElectionsContainer'
import { Layout } from './components/Layout'
import { ViewResultsContainer } from "./containers/ViewResultsContainer";
import { VoterFormContainer } from './containers/VoterFormContainer';
import { VoterToolContainer } from './containers/VoterToolContainer';

function App() {
  return (
    <Router>
      <Layout>
        <Provider store={appStore}>
          <Switch>
              <Route path="/" exact>
                <ElectionsContainer />
              </Route>
              <Route path="/ballots/:id" exact>
                <BallotContainer />
              </Route>
              <Route path="/voter-registration">
              <VoterFormContainer />
              </Route>
              <Route path="/view-voters">
                <VoterToolContainer />
              </Route>
              <Route path="/view-results">
                <div>View Results Component Goes Here.</div>
                  <ViewResultsContainer />
              </Route>
              <Route path="/new-election">
                <div>New Election Component Goes Here.</div>
                  <ElectionFormContainer />
              </Route>
            </Switch>
        </Provider>
      </Layout>
    </Router>
  );
}

export default App;
