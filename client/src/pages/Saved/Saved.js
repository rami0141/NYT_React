import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import Card from "../../components/Card";
import Footer from "../../components/Footer";

class Saved extends Component {


  render() {
    return(
      <Container>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1 className="text-center">
                <strong>(ReactJS) New York Times Article Scrubber</strong>
              </h1>
              <h2>
                Search for and save Articles of interest.
              </h2>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Card title="Saved Articles">
            </Card>
          </Col>
        </Row>
        <Footer />
      </Container>
    )
  }
}

export default Saved;
