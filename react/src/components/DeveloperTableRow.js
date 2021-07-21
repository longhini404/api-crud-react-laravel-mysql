import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

import axios from "axios";

export default class DeveloperTableRow extends Component {
  constructor(props) {
    super(props);
    this.deleteDeveloper = this.deleteDeveloper.bind(this);
  }

  deleteDeveloper() {
    axios
      .delete("http://localhost:4000/developers/" + this.props.obj.id)
      .then((res) => {
        console.log(res.data);
        Swal.fire("Desenvolvedor Deletado!", "", "success");
      })
      .catch((error) => {
        console.log(error);
        Swal.fire("Erro ao Deletar Desenvolvedor!", "", "warning");
      });
  }
  render() {
    return (
      <tr>
        <td>{this.props.obj.nome}</td>
        <td>{this.props.obj.sexo}</td>
        <td>{this.props.obj.idade}</td>
        <td>{this.props.obj.hobby}</td>
        <td>{this.props.obj.datanascimento}</td>
        <td>
          <Link
            className="edit-link pe-2"
            to={"/edit-developer/" + this.props.obj.id}
          >
            <Button size="sm" variant="info">
              Editar
            </Button>
          </Link>
          <Button onClick={this.deleteDeveloper} size="sm" variant="danger">
            Deletar
          </Button>
        </td>
      </tr>
    );
  }
}
