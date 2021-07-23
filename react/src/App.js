import React from "react";
import { Row, Col, Container, Navbar } from "react-bootstrap";
import devcrud from "./assets/img/devcrud.png";
import "bootstrap/dist/css/bootstrap.css";
import "./assets/fonts/style.css";
import "./assets/css/style.css";

import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import EditDeveloper from "./components/edit-developer.component";
import DevelopersList from "./components/developers-listing.component";
import CreateDeveloper from "./components/create-developer.component";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar className="bg-purple">
          <Container className="justify-content-center">
            <Navbar.Brand href="/">
              <img src={devcrud} width="300" />
            </Navbar.Brand>
          </Container>
        </Navbar>
        <div className="my-2">
          <Container>
            <Row>
              <Col md={12}>
                <div className="wrapper">
                  <Switch>
                    <Route exact path="/" component={CreateDeveloper} />
                    <Route
                      path="/create-developer"
                      component={CreateDeveloper}
                    />
                    <Route
                      path="/edit-developer/:id"
                      component={EditDeveloper}
                    />
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
      </div>
    </Router>
  );
}

export default App;
