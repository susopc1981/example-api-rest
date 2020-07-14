import React from "react";
import TableCol from "./TableCol";

class TableRow extends React.Component {
  render() {
    if (this.props.data) {
      return this.props.data.map((value, index) => {
        return (
          <tr
            key={index}
            onClick={() => this.props.onClick(value.id)}
            id={value.id}
          >
            <TableCol index={index} dataCol={value.id} />
            <TableCol index={index} dataCol={value.email} />
            <TableCol index={index} dataCol={value.first_name} />
            <TableCol index={index} dataCol={value.last_name} />
          </tr>
        );
      });
    } else {
      return (
        <>
          <img
            src="../cargando.gif"
            alt="no hay"
            title="no hay"
            className="img-fluid"
          />
        </>
      );
    }
  }
}

export default TableRow;
