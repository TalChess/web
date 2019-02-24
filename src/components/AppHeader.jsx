import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Container, Button, Icon } from 'semantic-ui-react';

class AppHeader extends Component {
  render() {
    return (
        <Menu size='large'>
          <Container>
            <Menu.Item active={this.props.page === 'dashboard'}>
              <Link to={'/dashboard'}>Openings</Link>
            </Menu.Item>
            <Menu.Item active={this.props.page === 'lists'}>
              <Link to={'/lists'}>Tactics</Link>
            </Menu.Item>
            <Menu.Item active={this.props.page === 'words'}>
              <Link to={'/words'}>Positions</Link>
            </Menu.Item>
            <Menu.Item active={this.props.page === 'sentences'}>
              <Link to={'/sentences'}>Play</Link>
            </Menu.Item>
            <Menu.Item position='right'>
              <Button>
                <Icon circular link name='user' />
                <Link to={'/settings'}>
                  My Profile
                </Link>
              </Button>
            </Menu.Item>
          </Container>
        </Menu>
    );
  }
}

export default AppHeader;
