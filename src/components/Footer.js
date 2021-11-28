import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <React.Fragment>
      <div className="footer">
          <Row id="footerrow">
            <Col md={12}>
              <p className="footername"> © 2020 <b>Zuman.</b> All Rights Reserved. </p>
            </Col>
          </Row>
          <Row>
            <Col id="footermiddle" md={12}>
              <p>Created by <b>ixTheme</b></p>
            </Col>
          </Row>
          <Row>
          <Col id="footersocial" md={12}>
                <a href="https://elionntechguy.github.io">
                  <i class="bi bi-facebook"></i>
                </a>
                <a href="https://elionntechguy.github.io">
                  <i class="bi bi-instagram"></i>
                </a>
                <a href="https://elionntechguy.github.io">
                  <i class="bi bi-twitter"></i>
                </a>
                <a href="https://elionntechguy.github.io">
                  <i class="bi bi-linkedin"></i>
                </a>
          </Col>
          </Row>
      </div>
    </React.Fragment>
  );
}

export default Footer;
