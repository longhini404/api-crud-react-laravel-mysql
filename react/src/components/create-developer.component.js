import React, { Component } from "react";
import DevelopersList from "./developers-listing.component";
import { Row, Col, Form, Button } from "react-bootstrap";
import Swal from "sweetalert2";
import axios from "axios";

export default class CreateDeveloper extends Component {
  constructor(props) {
    super(props);

    // Setting up functions
    this.onChangeDeveloperNome = this.onChangeDeveloperNome.bind(this);
    this.onChangeDeveloperSexo = this.onChangeDeveloperSexo.bind(this);
    this.onChangeDeveloperIdade = this.onChangeDeveloperIdade.bind(this);
    this.onChangeDeveloperHobby = this.onChangeDeveloperHobby.bind(this);
    this.onChangeDeveloperDataNascimento =
      this.onChangeDeveloperDataNascimento.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      nome: "",
      sexo: "",
      idade: "",
      hobby: "",
      datanascimento: "",
    };
  }

  onChangeDeveloperNome(e) {
    this.setState({ nome: e.target.value });
  }

  onChangeDeveloperSexo(e) {
    this.setState({ sexo: e.target.value });
  }

  onChangeDeveloperIdade(e) {
    this.setState({ idade: e.target.value });
  }

  onChangeDeveloperHobby(e) {
    this.setState({ hobby: e.target.value });
  }

  onChangeDeveloperDataNascimento(e) {
    this.setState({ datanascimento: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const developer = {
      nome: this.state.nome,
      sexo: this.state.sexo,
      idade: this.state.idade,
      hobby: this.state.hobby,
      datanascimento: this.state.datanascimento,
    };
    axios
      .post("http://localhost:4000/developers/", developer)
      .then((res) => {
        console.log(res.data);
        // Redirect to Developer List
        this.props.history.push("/");
        Swal.fire({
          title: "Desenvolvedor Cadastrado!",
          text: "",
          icon: "success",
        }).then(function () {
          window.location.reload();
        });
      })
      .catch((error) => {
        console.log(error);
        Swal.fire("", "", "warning");
        Swal.fire({
          title: "Erro ao cadastrar Desenvolvedor!",
          text: "",
          icon: "warning",
        }).then(function () {
          window.location.reload();
        });
      });

    this.setState({ nome: "" });
    this.setState({ sexo: "" });
    this.setState({ idade: "" });
    this.setState({ hobby: "" });
    this.setState({ datanascimento: "" });
  }

  render() {
    return (
      <div className="form-wrapper">
        <Form onSubmit={this.onSubmit}>
          <Row>
            <Col>
              <Form.Group controlId="Nome">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  value={this.state.nome}
                  onChange={this.onChangeDeveloperNome}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group as={Row} className="mb-2" controlId="Sexo">
                <Form.Label as="legend" column sm={2}>
                  Sexo
                </Form.Label>
                <Col sm={12}>
                  <Form.Check
                    type="radio"
                    label="Masculino"
                    name={this.state.sexo}
                    id={this.state.sexo}
                    value="M"
                    onChange={this.onChangeDeveloperSexo}
                    checked={this.state.sexo === "M"}
                  />
                  <Form.Check
                    type="radio"
                    label="Feminino"
                    name={this.state.sexo}
                    id={this.state.sexo}
                    value="F"
                    onChange={this.onChangeDeveloperSexo}
                    checked={this.state.sexo === "F"}
                  />
                </Col>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId="Idade">
                <Form.Label>Idade</Form.Label>
                <Form.Control
                  required
                  max="100"
                  type="number"
                  value={this.state.idade}
                  onChange={this.onChangeDeveloperIdade}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId="Hobby">
                <Form.Label>Hobby</Form.Label>
                <Form.Control
                  required
                  type="text"
                  value={this.state.hobby}
                  onChange={this.onChangeDeveloperHobby}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId="datanascimento">
                <Form.Label>Data de Nascimento</Form.Label>
                <Form.Control
                  required
                  type="date"
                  value={this.state.datanascimento}
                  onChange={this.onChangeDeveloperDataNascimento}
                />
              </Form.Group>
            </Col>
          </Row>
          <Button
            className="my-4"
            variant="primary"
            size="lg"
            block="block"
            type="submit"
          >
            Cadastrar Desenvolvedor
          </Button>
        </Form>

        <DevelopersList> </DevelopersList>
      </div>
    );
  }
}
