import React, { useState } from "react";
import { Container, Row, Col, Tabs, Tab, Carousel } from "react-bootstrap";
import SkillBar from "react-skillbars";
import "../App.css";
import first from "../assets/1nobg.png";
import second from "../assets/2nobg.png";
import third from "../assets/3nobg.png";
import fourth from "../assets/4nobg.png";
import Modali from "./Modal";

import vigi from "../assets/vigi.jpg";

function Home() {
  const [show, setShow] = useState(false);
  const [which, setWhich] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const showFunc = (numri) => {
    setShow(true);
    if (numri == "1") {
      setWhich("first");
    } else if (numri == "2") {
      setWhich("second");
    } else if (numri == "3") {
      setWhich("third");
    }
  };

  const skills = [
    { type: "webdev", level: 90 },
    { type: "brand", level: 70 },
    { type: "logo", level: 90 },
  ];
  let colors = {
    bar: "#292b2c",
    title: {
      text: "#fff",
      background: "#000000",
    },
  };

  return (
    <>
      <Container>
        <Row>
          <Col md={6} id="homedescdiv">
            <Row style={{ padding: "20px" }}>
              <Col id="grayicons" md={3}>
                <a href="https://elionntechguy.github.io">
                  <i class="bi bi-facebook"></i>
                </a>
                <br />
                <br />
                <a href="https://elionntechguy.github.io">
                  <i class="bi bi-instagram"></i>
                </a>
                <br />
                <br />
                <a href="https://elionntechguy.github.io">
                  <i class="bi bi-twitter"></i>
                </a>
                <br />
                <br />
                <a href="https://elionntechguy.github.io">
                  <i class="bi bi-linkedin"></i>
                </a>
              </Col>
              <Col md={9} id="prowebdesignerheader">
                <h3>I am a professional web designer from San Francisco.</h3>
                <br />
                <br />
                <p>
                  Consectetur adipisicing elit olore iusto cupiditate possimus
                  amet aliquam qui voluptatem. Animi perferendis Minima nemo
                  blanditiis rem odio provident delectus ab magni omnis optio.
                  Architecto debitis mollitia itaque eius accusamu.
                </p>
              </Col>
            </Row>
          </Col>
          <Col md={6} id="img-gray">
            <img src={vigi} alt="" />
          </Col>
        </Row>

        <br />
        <br />
        <br />
        <br />

        <div className="2nd">
          <Tabs defaultActiveKey="all" className="mb-3 justify-content-center">
            <Tab eventKey="all" title="All">
              <Row id="row1intaball">
                <Col lg={4} id="cardrow1">
                  <div
                    class="card"
                    style={{
                      padding: "0px",
                      width: "15rem",
                      height: "15rem",
                      lineHeight: "15rem",
                      borderRadius: "15rem",
                    }}
                  >
                    <img
                      alt="Card image"
                      class="card-img"
                      style={{
                        padding: "0px",
                        width: "15rem",
                        height: "15rem",
                        lineHeight: "15rem",
                        borderRadius: "15rem",
                      }}
                      src={vigi}
                    />
                    <div class="card-img-overlay">
                      <a
                        href="#"
                        class="stretched-link"
                        id="cardlink"
                        onClick={() => showFunc("1")}
                      ></a>
                      <p className="text">Lorem Ipsum</p>
                    </div>
                  </div>
                </Col>
                <Modali show={show} handleClose={handleClose} which={which} />
                <Col lg={4} id="cardrow1">
                  <div
                    class="card"
                    style={{
                      padding: "0px",
                      width: "15rem",
                      height: "15rem",
                      lineHeight: "15rem",
                      borderRadius: "15rem",
                    }}
                  >
                    <img
                      alt="Card image"
                      class="card-img"
                      style={{
                        padding: "0px",
                        width: "15rem",
                        height: "15rem",
                        lineHeight: "15rem",
                        borderRadius: "15rem",
                      }}
                      src={vigi}
                    />
                    <div class="card-img-overlay">
                      <a
                        href="#"
                        class="stretched-link"
                        id="cardlink"
                        onClick={() => showFunc("2")}
                      ></a>
                      <p className="text">Lorem Ipsum</p>
                    </div>
                  </div>
                </Col>
                <Modali show={show} handleClose={handleClose} which={which} />
                <Col lg={4} id="cardrow1">
                  <div
                    class="card"
                    style={{
                      padding: "0px",
                      width: "15rem",
                      height: "15rem",
                      lineHeight: "15rem",
                      borderRadius: "15rem",
                    }}
                  >
                    <img
                      alt="Card image"
                      class="card-img"
                      style={{
                        padding: "0px",
                        width: "15rem",
                        height: "15rem",
                        lineHeight: "15rem",
                        borderRadius: "15rem",
                      }}
                      src={vigi}
                    />
                    <div class="card-img-overlay">
                      <a
                        href="#"
                        class="stretched-link"
                        id="cardlink"
                        onClick={() => showFunc("3")}
                      ></a>
                      <p className="text">Lorem Ipsum</p>
                    </div>
                  </div>
                </Col>
                <Modali show={show} handleClose={handleClose} which={which} />
              </Row>
            </Tab>
            <Tab eventKey="web" title="Web">
              <Row id="row1intaball">
                <Col lg={4} id="cardrow1">
                  <div
                    class="card"
                    style={{
                      padding: "0px",
                      width: "15rem",
                      height: "15rem",
                      lineHeight: "15rem",
                      borderRadius: "15rem",
                    }}
                  >
                    <img
                      alt="Card image"
                      class="card-img"
                      style={{
                        padding: "0px",
                        width: "15rem",
                        height: "15rem",
                        lineHeight: "15rem",
                        borderRadius: "15rem",
                      }}
                      src={vigi}
                    />
                    <div class="card-img-overlay">
                      <a
                        href="#"
                        class="stretched-link"
                        id="cardlink"
                        onClick={() => showFunc("1")}
                      ></a>
                      <p className="text">Lorem Ipsum</p>
                    </div>
                  </div>
                </Col>
                <Modali show={show} handleClose={handleClose} which={which} />
                <Col lg={4} id="cardrow1">
                  <div
                    class="card"
                    style={{
                      padding: "0px",
                      width: "15rem",
                      height: "15rem",
                      lineHeight: "15rem",
                      borderRadius: "15rem",
                    }}
                  >
                    <img
                      alt="Card image"
                      class="card-img"
                      style={{
                        padding: "0px",
                        width: "15rem",
                        height: "15rem",
                        lineHeight: "15rem",
                        borderRadius: "15rem",
                      }}
                      src={vigi}
                    />
                    <div class="card-img-overlay">
                      <a
                        href="#"
                        class="stretched-link"
                        id="cardlink"
                        onClick={() => showFunc("2")}
                      ></a>
                      <p className="text">Lorem Ipsum</p>
                    </div>
                  </div>
                </Col>
                <Modali show={show} handleClose={handleClose} which={which} />
                <Col lg={4} id="cardrow1">
                  <div
                    class="card"
                    style={{
                      padding: "0px",
                      width: "15rem",
                      height: "15rem",
                      lineHeight: "15rem",
                      borderRadius: "15rem",
                    }}
                  >
                    <img
                      alt="Card image"
                      class="card-img"
                      style={{
                        padding: "0px",
                        width: "15rem",
                        height: "15rem",
                        lineHeight: "15rem",
                        borderRadius: "15rem",
                      }}
                      src={vigi}
                    />
                    <div class="card-img-overlay">
                      <a
                        href="#"
                        class="stretched-link"
                        id="cardlink"
                        onClick={() => showFunc("3")}
                      ></a>
                      <p className="text">Lorem Ipsum</p>
                    </div>
                  </div>
                </Col>
                <Modali show={show} handleClose={handleClose} which={which} />
              </Row>
            </Tab>
            <Tab eventKey="ui" title="UI/UX">
              <Row id="row1intaball">
                <Col lg={4} id="cardrow1">
                  <div
                    class="card"
                    style={{
                      padding: "0px",
                      width: "15rem",
                      height: "15rem",
                      lineHeight: "15rem",
                      borderRadius: "15rem",
                    }}
                  >
                    <img
                      alt="Card image"
                      class="card-img"
                      style={{
                        padding: "0px",
                        width: "15rem",
                        height: "15rem",
                        lineHeight: "15rem",
                        borderRadius: "15rem",
                      }}
                      src={vigi}
                    />
                    <div class="card-img-overlay">
                      <a
                        href="#"
                        class="stretched-link"
                        id="cardlink"
                        onClick={() => showFunc("1")}
                      ></a>
                      <p className="text">Lorem Ipsum</p>
                    </div>
                  </div>
                </Col>
                <Modali show={show} handleClose={handleClose} which={which} />
                <Col lg={4} id="cardrow1">
                  <div
                    class="card"
                    style={{
                      padding: "0px",
                      width: "15rem",
                      height: "15rem",
                      lineHeight: "15rem",
                      borderRadius: "15rem",
                    }}
                  >
                    <img
                      alt="Card image"
                      class="card-img"
                      style={{
                        padding: "0px",
                        width: "15rem",
                        height: "15rem",
                        lineHeight: "15rem",
                        borderRadius: "15rem",
                      }}
                      src={vigi}
                    />
                    <div class="card-img-overlay">
                      <a
                        href="#"
                        class="stretched-link"
                        id="cardlink"
                        onClick={() => showFunc("2")}
                      ></a>
                      <p className="text">Lorem Ipsum</p>
                    </div>
                  </div>
                </Col>
                <Modali show={show} handleClose={handleClose} which={which} />
                <Col lg={4} id="cardrow1">
                  <div
                    class="card"
                    style={{
                      padding: "0px",
                      width: "15rem",
                      height: "15rem",
                      lineHeight: "15rem",
                      borderRadius: "15rem",
                    }}
                  >
                    <img
                      alt="Card image"
                      class="card-img"
                      style={{
                        padding: "0px",
                        width: "15rem",
                        height: "15rem",
                        lineHeight: "15rem",
                        borderRadius: "15rem",
                      }}
                      src={vigi}
                    />
                    <div class="card-img-overlay">
                      <a
                        href="#"
                        class="stretched-link"
                        id="cardlink"
                        onClick={() => showFunc("3")}
                      ></a>
                      <p className="text">Lorem Ipsum</p>
                    </div>
                  </div>
                </Col>
                <Modali show={show} handleClose={handleClose} which={which} />
              </Row>
            </Tab>
            <Tab eventKey="branding" title="Branding">
              <Row id="row1intaball">
                <Col lg={4} id="cardrow1">
                  <div
                    class="card"
                    style={{
                      padding: "0px",
                      width: "15rem",
                      height: "15rem",
                      lineHeight: "15rem",
                      borderRadius: "15rem",
                    }}
                  >
                    <img
                      alt="Card image"
                      class="card-img"
                      style={{
                        padding: "0px",
                        width: "15rem",
                        height: "15rem",
                        lineHeight: "15rem",
                        borderRadius: "15rem",
                      }}
                      src={vigi}
                    />
                    <div class="card-img-overlay">
                      <a
                        href="#"
                        class="stretched-link"
                        id="cardlink"
                        onClick={() => showFunc("1")}
                      ></a>
                      <p className="text">Lorem Ipsum</p>
                    </div>
                  </div>
                </Col>
                <Modali show={show} handleClose={handleClose} which={which} />
                <Col lg={4} id="cardrow1">
                  <div
                    class="card"
                    style={{
                      padding: "0px",
                      width: "15rem",
                      height: "15rem",
                      lineHeight: "15rem",
                      borderRadius: "15rem",
                    }}
                  >
                    <img
                      alt="Card image"
                      class="card-img"
                      style={{
                        padding: "0px",
                        width: "15rem",
                        height: "15rem",
                        lineHeight: "15rem",
                        borderRadius: "15rem",
                      }}
                      src={vigi}
                    />
                    <div class="card-img-overlay">
                      <a
                        href="#"
                        class="stretched-link"
                        id="cardlink"
                        onClick={() => showFunc("2")}
                      ></a>
                      <p className="text">Lorem Ipsum</p>
                    </div>
                  </div>
                </Col>
                <Modali show={show} handleClose={handleClose} which={which} />
                <Col lg={4} id="cardrow1">
                  <div
                    class="card"
                    style={{
                      padding: "0px",
                      width: "15rem",
                      height: "15rem",
                      lineHeight: "15rem",
                      borderRadius: "15rem",
                    }}
                  >
                    <img
                      alt="Card image"
                      class="card-img"
                      style={{
                        padding: "0px",
                        width: "15rem",
                        height: "15rem",
                        lineHeight: "15rem",
                        borderRadius: "15rem",
                      }}
                      src={vigi}
                    />
                    <div class="card-img-overlay">
                      <a
                        href="#"
                        class="stretched-link"
                        id="cardlink"
                        onClick={() => showFunc("3")}
                      ></a>
                      <p className="text">Lorem Ipsum</p>
                    </div>
                  </div>
                </Col>
                <Modali show={show} handleClose={handleClose} which={which} />
              </Row>
            </Tab>
          </Tabs>
        </div>

        <br />
        <br />
        <br />
        <br />

        <div className="3rd">
          <Row>
            <Col md={3} id="thirdrowlogos">
              <img src={first} alt="" />
            </Col>
            <Col md={3} id="thirdrowlogos">
              <img src={second} alt="" />
            </Col>
            <Col md={3} id="thirdrowlogos">
              <img src={third} alt="" />
            </Col>
            <Col md={3} id="thirdrowlogos">
              <img src={fourth} alt="" />
            </Col>
          </Row>
        </div>

        <br />
        <br />
        <br />
        <br />

        <div className="fourthdiv">
          <Row>
            <Col md={6} id="skillsdiv">
              <SkillBar skills={skills} colors={colors} />
            </Col>
            <Col md={6}>
              <h3 id="skillsh3">
                I have high skills in developing and programming
              </h3>
              <br />
              <p>
                I am working on a professional, visually sophisticated and
                technologically proficient, responsive and multi-functional
                personal portfolio template Shane.
              </p>
            </Col>
          </Row>
        </div>

        <div className="fifthdiv">
          <Carousel>
            <Carousel.Item>
              <Row>
                <Col sm={4} id="testimonialimg">
                  <img src={vigi} alt="" />
                </Col>
                <Col sm={8} id="testimonialdesc">
                  <h4>Alien Kopil</h4>
                  <p>CEO - Notun Inc.</p>
                  <p>
                    Lorem ipsum dolor sit amet omnis consectetur adipisicing
                    elit empora quia forem ipsum dolorsiempora aspernatur
                    dolore, sapiente quidem sequi non tenetur harum, nihil quis
                    beatae rerum ipsa nemo quae voluptate, repellendus nostrum
                    debitis velit nisi.
                  </p>
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <Row>
                <Col sm={4} id="testimonialimg">
                  <img src={vigi} alt="" />
                </Col>
                <Col sm={8} id="testimonialdesc">
                  <h4>Alien Kopil</h4>
                  <p>CEO - Notun Inc.</p>
                  <p>
                    Lorem ipsum dolor sit amet omnis consectetur adipisicing
                    elit empora quia forem ipsum dolorsiempora aspernatur
                    dolore, sapiente quidem sequi non tenetur harum, nihil quis
                    beatae rerum ipsa nemo quae voluptate, repellendus nostrum
                    debitis velit nisi.
                  </p>
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <Row>
                <Col sm={4} id="testimonialimg">
                  <img src={vigi} alt="" />
                </Col>
                <Col sm={8} id="testimonialdesc">
                  <h4>Alien Kopil</h4>
                  <p>CEO - Notun Inc.</p>
                  <p>
                    Lorem ipsum dolor sit amet omnis consectetur adipisicing
                    elit empora quia forem ipsum dolorsiempora aspernatur
                    dolore, sapiente quidem sequi non tenetur harum, nihil quis
                    beatae rerum ipsa nemo quae voluptate, repellendus nostrum
                    debitis velit nisi.
                  </p>
                </Col>
              </Row>
            </Carousel.Item>
          </Carousel>
        </div>
      </Container>
    </>
  );
}

export default Home;
