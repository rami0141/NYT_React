import React, { Component } from "react";
import Form from "../../components/Form";
import Jumbotron from "../../components/Jumbotron";
import { List } from "../../components/List";
import { Col, Row, Container } from "../../components/Grid";

class Home extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h3 className="text-center mt-5">
                <strong>New York Times Article Scrubber</strong>
              </h3>
              <Form />
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
