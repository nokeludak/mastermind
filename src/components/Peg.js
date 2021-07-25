import React from 'react';

class Peg extends React.Component {
  render() {
    const pegId = +this.props.pegId.substr(this.props.pegId.indexOf('-') + 1)
    const rowId = +this.props.pegId.substr(1, this.props.pegId.indexOf('-') - 1)
    let clase = ''
    if (this.props.state.activeRow === rowId) {
      clase = this.props.state.currentRow[pegId]
    } else {
      for (let i in this.props.state.previousRows) {
        if (+i === +rowId) {
          clase = this.props.state.previousRows[rowId][pegId]
        }
      }
    }

    return (
      <span
        id={this.props.pegId}
        className={'peg ' + clase}
        onClick={() =>
          this.props.pegAction(this.props.state.activeColor, this.props.pegId)} >
      </span>
    )
  }
}
export default Peg;