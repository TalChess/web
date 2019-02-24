import React, { Component } from 'react';
import { connect } from 'react-redux';
import Flexbox from 'flexbox-react';

import AppHeader from './AppHeader';
import Board from './Board';
import OpeningsExplorer from './OpeningsExplorer';
import OpeningsRepertoire from './OpeningsRepertoire';
import Opening from './Opening';

const mapStateToProps = state => {
  return {
    openings: state.app.openings
  };
};

const mapDispatchToProps = dispatch => {
  return { };
};

class Openings extends Component {
  render() {
    return (
      <div>
        <AppHeader />
        <div style={{ marginTop: 32 }}>
          <Flexbox flexDirection='row'
                   justifyContent='center'
                   alignItems='center'>
            <OpeningsExplorer openings={this.props.openings} />
            <Board />
            <div>
              <OpeningsRepertoire />
              <Opening />
            </div>
          </Flexbox>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Openings);
