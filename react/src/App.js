import React from "react";
import { Row, Col, Container, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import EditDeveloper from "./components/edit-developer.component";
import DevelopersList from "./components/developers-listing.component";
import CreateDeveloper from "./components/create-developer.component";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar bg="dark">
          <Container>
            <Navbar.Brand href="/">
              <img
                src="https://react-bootstrap.github.io/logo.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
          </Container>
        </Navbar>

        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Switch>
                  <Route exact path="/" component={CreateDeveloper} />
                  <Route path="/create-developer" component={CreateDeveloper} />
                  <Route path="/edit-developer/:id" component={EditDeveloper} />
                  <Route
                    path="/developers-listing"
                    component={DevelopersList}
                  />
                </Switch>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
}

export default App;
