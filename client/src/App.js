import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import CreateInvestigation from './components/CreateInvestigation';
import ShowInvestigationList from './components/ShowInvestigationList';
import ShowInvestigationDetails from './components/ShowInvestigationDetails';
import UpdateInvestigationInfo from './components/UpdateInvestigationInfo';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={ShowInvestigationList} />
          <Route path='/create-case' component={CreateInvestigation} />
          <Route path='/edit-case/:id' component={UpdateInvestigationInfo} />
          <Route path='/show-case/:id' component={ShowInvestigationDetails} />
        </div>
      </Router>
    );
  }
}

export default App;