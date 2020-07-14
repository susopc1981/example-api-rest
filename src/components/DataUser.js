import React from "react";

class DataUser extends React.Component {
  render() {
    if (this.props.isLoading === true) {
      return (
        <>
          <div className="card">
            <img
              src={this.props.data.avatar}
              alt=""
              title=""
              className="card-img align-self-center mt-2"
            />
            <div className="card-body d-flex flex-column">
              <div>
                <label>Id:</label>
                <label className="pl-2">{this.props.data.id}</label>
              </div>
              <div>
                <label>Nombre:</label>
                <label className="pl-2">{this.props.data.first_name}</label>
              </div>
              <div>
                <label>Apellidos:</label>
                <label className="pl-2">{this.props.data.last_name}</label>
              </div>
              <div>
                <label>E-mail:</label>
                <label className="pl-2">{this.props.data.email}</label>
              </div>
            </div>
          </div>
        </>
      );
    } else
      return (
        <>
          <img src="../cargando.gif" alt="no hay" title="no hay" />
        </>
      );
  }
}

export default DataUser;
