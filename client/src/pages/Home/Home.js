import React, { Component } from "react";
import Form from "../../components/Form";
import Jumbotron from "../../components/Jumbotron";
import Card from "../../components/Card";
import { Col, Row, Container } from "../../components/Grid";

class Home extends Component {
  state = {
    q: "",
    start_year: "",
    end_year: "",
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h3><strong>New York Times Article Scrubber</strong></h3>
              <h5>Search for and save articles of interest</h5>
            </Jumbotron>
          </Col>
          <Col size="md-12">
            <Card title="Query">
              <Form
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                q={this.state.q}
                start_year={this.state.start_year}
                end_year={this.state.end_year}
              />
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
