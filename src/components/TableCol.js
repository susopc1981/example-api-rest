import React from "react";

class TableCol extends React.Component {
  render() {
    return <td key={this.props.index}>{this.props.dataCol}</td>;
  }
}

export default TableCol;
