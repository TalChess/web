import React, { Component } from 'react';

import { Menu, Input } from 'semantic-ui-react';

class OpeningsExplorer extends Component {
  render() {
    return (
      <Menu vertical
            style={{ width: 320, height: 560, marginRight: 16 }}>
        <Menu.Item>
          OPENINGS EXPLORER
        </Menu.Item>
        <Menu.Item>
          <Input placeholder='Search...' />
        </Menu.Item>

        {this.props.openings.map((o) => {
          return (
            <Menu.Item>
              {o.name}
            </Menu.Item>
          );
        })}
      </Menu>
    );
  }
}

export default OpeningsExplorer;
