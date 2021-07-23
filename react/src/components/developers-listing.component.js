import React, { Component } from "react";
import DeveloperTableRow from "./DeveloperTableRow";
import Table from "react-bootstrap/Table";
import axios from "axios";

export default class DeveloperList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      developers: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/developers/")
      .then((res) => {
        this.setState({
          developers: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  DataTable() {
    return this.state.developers.map((res, i) => {
      return <DeveloperTableRow obj={res} key={i} />;
    });
  }

  render() {
    return (
      <div className="table-wrapper">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Sexo</th>
              <th>Idade</th>
              <th>Hobby</th>
              <th>Data de Nascimento</th>
              <th className="text-center">Ação</th>
            </tr>
          </thead>
          <tbody>{this.DataTable()}</tbody>
        </Table>
      </div>
    );
  }
}
