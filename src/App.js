import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import SignIn from './components/auth/SignIn';
import LeaguesIndex from './components/leagues/LeaguesIndex';
import LeagueDetail from './components/leagues/LeagueDetail';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/signin" component={SignIn}></Route>
            <Route exact path="/home" component={LeaguesIndex}></Route>
            <Route exact path="/players" component={LeagueDetail}></Route>
            <Route exact path="/league/:league_id" component={LeagueDetail}></Route>
            <Route exact path="/" component={LeaguesIndex}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
