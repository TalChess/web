import React, { Component } from 'react';

import { Menu, Statistic, Header } from 'semantic-ui-react';
import OverTimeChart from './OverTimeChart';

class Opening extends Component {
  render() {
    return (
      <div>
        <Menu vertical
              style={{ width: 320, height: 280, marginLeft: 16 }}>
          <Menu.Item>
            #A34 ENGLISH SYMETRICAL, RUBINSTEIN SYSTEM
          </Menu.Item>
          <Menu.Item>
            1. e4 e5            
          </Menu.Item>
          <Menu.Item>
            2. e4 e5            
          </Menu.Item>
          <Menu.Item>
            3. e4 e5            
          </Menu.Item>
        </Menu>
        <OverTimeChart />
      </div>
    );
  }
}

export default Opening;
