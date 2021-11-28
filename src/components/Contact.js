import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Tabs,
  Tab,
  Carousel,
  Form,
  Button,
} from "react-bootstrap";
import "../App.css";

function Contact() {
  return (
    <>
      <Container fluid>
        <div className="titlecontact">
          <h1>Contact</h1>
        </div>
        <div className="aboutcontact">
          <Row>
            <Col sm={6}>
              <div id="aboutcontactimg">
                <img
                  className="img-fluid"
                  src="https://scontent.fprn13-1.fna.fbcdn.net/v/t1.6435-9/165869875_221989689713161_4359264836905223720_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=Gk3opWMElyEAX_P5ZiY&_nc_ht=scontent.fprn13-1.fna&oh=89513b738b7e1277a8b37f89127d15c3&oe=61231775"
                  alt=""
                />
              </div>
              <div id="aboutcontacticons">
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
              </div>
            </Col>
            <Col sm={6} id="aboutcontactdesc">
              <h3>Nevine Acotanza</h3>
              <br />
              <p>Chief Operating Officer</p>
              <p>
                I am available for freelance work. Connect with me via and call
                in to my account.
              </p>
              <b>
                Phone: +01234567890
                <br />
                Email: admin@example.com
              </b>
            </Col>
          </Row>
        </div>

        <div className="contactform">
          <Form>
            <Row>
              <Form.Group className="mb-3 col-sm-6">
                <Form.Label>YOUR NAME</Form.Label>
                <Form.Control type="text" placeholder="Your name" />
              </Form.Group>
              <Form.Group className="mb-3 col-sm-6">
                <Form.Label>PHONE NUMBER</Form.Label>
                <Form.Control type="text" placeholder="Phone Number" />
              </Form.Group>
            </Row>
            <Row>
              <Form.Group className="col-sm-12">
                <Form.Label>EMAIL</Form.Label>
                <Form.Control type="text" placeholder="Your email" />
              </Form.Group>
            </Row>
            <Row>
              <Form.Group className="col-sm-12">
                <Form.Label>SUBJECT</Form.Label>
                <Form.Control type="text" placeholder="Subject" />
              </Form.Group>
            </Row>
            <Row>
              <Form.Group className="col-sm-12">
                <Form.Label>YOUR MESSAGE</Form.Label>
                <Form.Control as="textarea" rows={5} />
              </Form.Group>
            </Row>
            <Button variant="danger" type="submit" className="btn-block">
              SEND MESSAGE
            </Button>
          </Form>
        </div>
      </Container>
    </>
  );
}

export default Contact;
