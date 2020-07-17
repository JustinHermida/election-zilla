import React from 'react';
import './App.css';

import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import {appStore} from './stores/appStore'

import {Layout} from './components/Layout'
import {Home} from './components/Home'
import {VoterToolContainer} from './containers/VoterToolContainer';
import {ElectionFormContainer} from "./containers/ElectionFormContainer";
import {ViewResultsContainer} from "./containers/ViewResultsContainer";
import { VoterFormContainer } from './containers/VoterFormContainer';
import {DisplayBallotResults} from "./components/DisplayBallotResults";

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
