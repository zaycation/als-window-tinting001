import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import "../css/about.css";

const AboutPage = () => {
  return (
    <Container fluid={true} className="container-fluid">
      <Row>
        <Col xs={12} sm={12} md={6} lg={6} className="my-5">
          <div>
            <h4 className="my-5">All About Al!</h4>
            <h6 className="my-4">Established in 1992</h6>
            <p>
              Al has been skilled in his craft for well over a few decades. Over
              the years, he has built a rapport from his clientele that continue
              to invest with him because of his great prices and exceptionally
              fast work. Al has never been shy of hard work. What he can do with
              his own two hands, most businesses couldn't even dream of doing!
              Get your work done with Al's Window Tinting and we'll promise you
              won't regret it!
            </p>
          </div>
          <div className="text-center my-5">
            <a href="tel:661-679-8468">
              <Button variant="dark" className="">
                Get Instant Quote
              </Button>
            </a>{" "}
            <a
              href="https://www.yelp.com/biz/al-s-window-tinting-lancaster?hrid=7p4iu_2_W_VvwVSrGujISg&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="dark" className="">
                View Yelp Reviews
              </Button>
            </a>
          </div>
        </Col>
        <Col xs={12} sm={12} md={6} lg={6} className="about__bg" />
      </Row>
    </Container>
  );
};

export default AboutPage;
