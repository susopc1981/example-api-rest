import React from "react";
import "./App.css";
import TableRow from "./components/TableRow";
import DataUser from "./components/DataUser";
import getUser from "./getUser";
import getUsers from "./getUsers";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: {},
      isLoading: true,
    };
  }
  HandleOnClick = async (id) => {
    this.setState({ ...this.state, isLoading: false });
    const dataUser = await getUser(id);
    this.setState({ ...this.state, currentUser: dataUser, isLoading: true });
  };

  async componentDidMount() {
    const data = await getUsers();
    this.setState({ ...this.state, users: data.data });
  }

  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <table className="table table-hover border bg-success text-dark font-weight-bold">
                {this.state.users ? (
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
                ) : (
                  <></>
                )}
                <tbody>
                  <TableRow
                    data={this.state.users}
                    onClick={this.HandleOnClick}
                  />
                </tbody>
              </table>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-5 d-flex flex-column justify-content-center rounded">
              {this.state.currentUser.id ?? this.state.isLoading === false ? (
                <DataUser
                  data={this.state.currentUser}
                  isLoading={this.state.isLoading}
                  state={this.state}
                />
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
