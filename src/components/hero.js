import React from "react";
import Slide from "react-reveal/Slide";
import { Row, Col, Button } from "react-bootstrap";

const hero = () => {
  return (
    <Row className="hero__bg">
      <Col>
        <Slide bottom>
          <div className="my-5 text-white text-center">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <h2>The Best Tinting Services in the AV</h2>
            <br />
            <br />
            <br />
            <Button variant="light" className="hero__btn">
              Get Instant Quote
            </Button> {" "}
            <Button variant="light" className="hero__btn">
              View Yelp Reviews
            </Button>
            <br />
            <br />
            <br />
            <br />
            <h4>Window Tinting | Vehicle Wraps | Tint Removal | And More!</h4>
          </div>
        </Slide>
      </Col>
    </Row>
  );
};

export default hero;
