import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { connect } from 'react-redux';

import Openings from './Openings';

const mapStateToProps = state => {
  return { };
};

const mapDispatchToProps = dispatch => {
  return { };
};

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Openings} />
      </Switch>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

