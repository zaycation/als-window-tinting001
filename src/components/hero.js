import React from "react";
import Slide from "react-reveal/Slide";
import { FaSortDown } from "react-icons/fa";
import { Row, Col, Button } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";

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
            <a href="tel:661-679-8468">
              <Button variant="light" className="hero__btn">
                Get Instant Quote
              </Button>
            </a>{" "}
            <a
              href="https://www.yelp.com/biz/al-s-window-tinting-lancaster?hrid=7p4iu_2_W_VvwVSrGujISg&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="light" className="hero__btn">
                View Yelp Reviews
              </Button>
            </a>
            <br />
            <br />
            <br />
            <br />
            <h4>Window Tinting | Vehicle Wraps | Tint Removal | And More!</h4>
            <br />
            <br />
            <br />
            <br />
            <HashLink to="#reviews">
              <FaSortDown size={46} color="#ffc500" />
            </HashLink>
          </div>
        </Slide>
      </Col>
    </Row>
  );
};

export default hero;
