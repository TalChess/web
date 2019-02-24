import React, { Component } from 'react';
import Chessboard from 'chessboardjsx';

class Board extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Chessboard position='start'/>
    );
  }
}

export default Board;

