import React, { Component } from 'react';

import { Menu, Statistic } from 'semantic-ui-react';
import OverTimeChart from './OverTimeChart';

class OpeningsRepertoire extends Component {
  render() {
    return (
      <div>
        <Menu vertical
              style={{ width: 320, height: 280, marginLeft: 16 }}>
          <Menu.Item>
            YOUR REPERTOIRE
          </Menu.Item>
          <Menu.Item>
            
          </Menu.Item>
        </Menu>
        <OverTimeChart />
      </div>
    );
  }
}

export default OpeningsRepertoire;
