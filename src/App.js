import React from 'react';
import './App.css';

import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import {appStore} from './stores/appStore'

import { BallotPage } from './components/BallotPage'
import { HomePage } from './components/HomePage'
import { Layout } from './components/Layout'
import { VoterFormContainer } from './containers/VoterFormContainer';
import { VoterToolContainer } from './containers/VoterToolContainer';
import {ElectionFormContainer} from "./containers/ElectionFormContainer";
import {Layout} from './components/Layout'
import {ViewResultsContainer} from "./containers/ViewResultsContainer";
import {VoterToolContainer} from './containers/VoterToolContainer';

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
