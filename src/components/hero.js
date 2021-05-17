import React from "react";
import Flip from "react-reveal/Flip";
import Slide from "react-reveal/Slide";
import { FaSortDown } from "react-icons/fa";
import { Row, Col, Button } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";

const hero = () => {
  return (
    <Row className="hero__bg">
      <Col>
        <div className="my-5 text-white text-center">
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <Flip bottom>
            <h2>The Best Tinting Services in the AV</h2>
          </Flip>
          <br />
          <br />
          <br />
          <div className="d-flex align-items-center justify-content-center">
            <div>
              <Slide left>
                <Button
                  variant="light"
                  className="hero__btn"
                  onClick={() => window.open("tel:661-679-8468")}
                >
                  Get Instant Quote
                </Button>
              </Slide>
            </div>{" "}
            <div>
              <Slide right>
                <Button
                  variant="light"
                  className="hero__btn"
                  onClick={() =>
                    window.open(
                      "https://www.yelp.com/biz/al-s-window-tinting-lancaster?hrid=7p4iu_2_W_VvwVSrGujISg&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)"
                    )
                  }
                >
                  View Yelp Reviews
                </Button>
              </Slide>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <Flip bottom>
            <h4>Window Tinting | Vehicle Wraps | Tint Removal | And More!</h4>
          </Flip>
          <br />
          <br />
          <br />
          <br />
          <Slide bottom>
            <HashLink to="#reviews">
              <FaSortDown size={46} color="#ffc500" />
            </HashLink>
          </Slide>
        </div>
      </Col>
    </Row>
  );
};

export default hero;
