import React, { Component } from "react";
import Form from "../../components/Form";
import Jumbotron from "../../components/Jumbotron";
import Article from "../../components/Article";
import Footer from "../../components/Footer";
import Card from "../../components/Card";
import { Col, Row, Container } from "../../components/Grid";
import { List } from "../../components/List";

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
              <h1><strong>(ReactJS) New York Times Article Scrubber</strong></h1>
              <h2>Search for and save articles of interest</h2>
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
        <Row>
          <Col size="md-12">
            <Card title="Results">

            </Card>
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}

export default Home;
