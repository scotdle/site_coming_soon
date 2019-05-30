import React from "react"
import Header from "../components/header.js"
import '../styles/styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col } from 'reactstrap';


export default (props) =>
  (
    <Container>
      <Row>
        <Col md="6" >
          <Header headerText="About Gatsby"/>
        </Col>
        <Col md="6" className="flex-grow">
          <p>Such wow. Very React.</p>
          <Row>
            <Col md="12" >This is one</Col>
            <Col md="12">This is two</Col>
            <Col md="12">This is three</Col>

          </Row>
        </Col>
      </Row>
    </Container>
  );
