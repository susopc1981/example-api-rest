import React from "react";
import TableCol from "./TableCol";

class TableRow extends React.Component {
  render() {
    if (this.props.data) {
      const data = this.props.data.map((value, index) => {
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
      return (
        <table className="table table-hover border bg-success text-dark font-weight-bold">
          <thead>
            <tr>
              <th scope="col" key="1">
                Nº
              </th>
              <th scope="col" key="2">
                E-Mail
              </th>
              <th scope="col" key="3">
                Nombre
              </th>
              <th scope="col" key="4">
                Apellido
              </th>
            </tr>
          </thead>
          <tbody>{data}</tbody>
        </table>
      );
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
