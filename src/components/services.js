import React from "react";
import { Row, Col, Card } from "react-bootstrap";

const services = () => {
  return (
    <>
      <br />
      <br />
      <br />
      <Row>
        <Col>
          <h2 className="text-center text-white">Services We Offer</h2>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={6} md={4} lg={4}>
          <Card className="my-3">
            <Card.Body>Window Tinting</Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4} lg={4}>
          <Card className="my-3">
            <Card.Body>Window Tint Removal</Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4} lg={4}>
          <Card className="my-3">
            <Card.Body>Vehicle Wrap Installation</Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4} lg={4}>
          <Card className="my-3">
            <Card.Body>Vehicle Wrap Removal</Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4} lg={4}>
          <Card className="my-3">
            <Card.Body>Headlight/Taillight Tinting</Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4} lg={4}>
          <Card className="my-3">
            <Card.Body>Paint Protection</Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <h6 className="my-5 text-center text-white">
            *All services can be requested for auto, commercial or residential
            if necessary. Please note that pricing may vary.
          </h6>
        </Col>
      </Row>
    </>
  );
};

export default services;

/*

window tinting auto, comercial, resizable
paint protection
*/
