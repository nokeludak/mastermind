import React from 'react';
import Row from "./Row";

export class Board extends React.Component {
  
  render() {
   
    let rows = [];
    for (let i = 0; i < 10; i++) {
      rows.push(
        <Row
          key={'row_' + i}
          id={'row_' + i}
          state={this.props.state}
          pegAction={this.props.pegAction}
          checkAction={this.props.checkAction} />
        )
    }
    return (
      <div className='board'>
        {rows}
      </div>
    )
  }
}

export default Board;