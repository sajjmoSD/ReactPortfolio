import React, { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import Figure from "react-bootstrap/Figure";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faNodeJs,
  faJs,
  faPagelines,
  faGithub,
  faGithubAlt,
} from "@fortawesome/free-brands-svg-icons";
import { faClock, faNewspaper } from "@fortawesome/free-regular-svg-icons";
export default function Main() {
  const [isLoading, setIsLoading] = useState(true);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(delay);
  }, []);
  return (
    <>
      {isLoading ? (
        <div
          style={{ textAlign: "center", paddingTop: "30px", fontSize: "200px" }}
        >
          <Spinner animation="border" variant="danger" />
        </div>
      ) : (
        <>
          <div style={{ textAlign: "center", paddingTop: "20px" }}>
            <Figure>
              <Col xs={6} md={4}>
                <div>
                  <Image
                    src="./images/format.png"
                    roundedCircle
                    style={{ width: "280px", height: "280px" }}
                  />
                </div>
              </Col>

              <Figure.Caption style={{ color: "black" }}>
                <div
                  style={{
                    backgroundColor: "#AFC1D6",
                    borderRadius: "9px",
                    marginTop: "10px",
                  }}
                >
                  <p style={{ fontSize: "20px" }}>
                    <span style={{ fontSize: "25px" }}>
                      Mohammed <span style={{ color: "red" }}>Sajjadul</span>
                    </span>
                    <br />
                    Full Stack
                    <span style={{ color: "red" }}> Developer </span>
                    <br />
                    <span style={{ color: "Red" }}>N</span>orthcoder Graduate
                    <br />
                    <span style={{ color: "red" }}>Manc</span>hester, UK
                  </p>
                </div>
              </Figure.Caption>
            </Figure>
          </div>
          <div style={{ textAlign: "center" }}>
            <Button
              variant="danger"
              onClick={() => setShowDetails(!showDetails)}
              style={{ marginBottom: "20px" }}
            >
              {showDetails ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-box-arrow-in-up"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3.5 10a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 0 0 1h2A1.5 1.5 0 0 0 14 9.5v-8A1.5 1.5 0 0 0 12.5 0h-9A1.5 1.5 0 0 0 2 1.5v8A1.5 1.5 0 0 0 3.5 11h2a.5.5 0 0 0 0-1z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M7.646 4.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V14.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-box-arrow-down"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3.5 10a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 0 0 1h2A1.5 1.5 0 0 0 14 9.5v-8A1.5 1.5 0 0 0 12.5 0h-9A1.5 1.5 0 0 0 2 1.5v8A1.5 1.5 0 0 0 3.5 11h2a.5.5 0 0 0 0-1z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M7.646 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V5.5a.5.5 0 0 0-1 0v8.793l-2.146-2.147a.5.5 0 0 0-.708.708z"
                  />
                </svg>
              )}
            </Button>
          </div>
          {showDetails && (
            <section
              id="aboutMe"
              className={"aboutMe"}
              style={{
                backgroundColor: "lightgray",
                textAlign: "center",
                marginLeft: "30px",
                marginRight: "30px",
                paddingLeft: "10px",
                paddingRight: "10px",
                borderRadius: "20px",
              }}
            >
              <div style={{ paddingTop: "10px" }}>
                <h1
                  style={{
                    textAlign: "center",
                    color: "black",
                    textDecoration: "underline",
                  }}
                >
                  About <span style={{ color: "red" }}>Me</span>!
                </h1>
              </div>
              <p
                style={{
                  backgroundColor: "white",
                  borderRadius: "10px",
                  marginBottom: "20px",
                }}
              >
                One of my passion is to play recreational football with my
                friends. It keeps me engaged whilst keeping my mind fresh. A fun
                fact about myself I am a life-long Liverpool{" "}
                <span style={{ color: "red" }}>FC</span> fan and hope to see our
                team succeed in the future. In my spare time I enjoy testing my
                development skills by completing KATAS on an online platform
                such as CodeSignal
                <br />
                <br />I endured an immersive and entertaining 13 week Software
                Engineering bootcamp with
                <span style={{ color: "red" }}> N</span>orthcoders. During this
                timeframe it has developed my programming skills in both
                sections of Back-End and Front-End.
                <span style={{ fontSize: "20px", fontWeight: "bolder" }}>
                  {" "}
                  Evolving{" "}
                </span>{" "}
                and{" "}
                <span style={{ fontSize: "20px", fontWeight: "bolder" }}>
                  growing{" "}
                </span>
                as an individual into a Full-Stack Developer.
                <br />
                During Back-End, I built{" "}
                <span style={{ color: "red" }}>REST</span>ful APIs using Node{" "}
                <span style={{ color: "green" }}>
                  JS {""}
                  <FontAwesomeIcon icon={faNodeJs} />
                </span>{" "}
                and used the Express{" "}
                <span style={{ color: "yellow" }}>
                  JS <FontAwesomeIcon icon={faJs} />
                </span>{" "}
                framework to handle user requests and responses efficiently. I
                then used Jest and Supertest to provide assurance that our
                functions / requests / responses work correctly by building up
                test suites in accordance with the behavior of our application.
                <br />
                In addition, I also incorporated the use of PostgresSQL to store
                information within a database. This allows for specificity for
                when a user is making a request, I would build a SQL statement
                for the corresponding request
                <br />
                <br />
                When I transitioned into the Front-End module, I was tasked to
                connect my Back-End APIs with my Front-End application. Using
                <span style={{ color: "blue" }}>
                  {" "}
                  React <FontAwesomeIcon icon={faReact} />
                </span>{" "}
                this allowed for a Single Page Application to be rendered with
                different components depending on the circumstance of the user
                request. To style my Front-End application I used different
                libraries such as: Bootstrap, Material UI and Tailwind.
                <br />
                <br />
              </p>
              <ListGroup
                style={{
                  textAlign: "center",
                  paddingBottom: "20px",
                  marginTop: "20px",
                }}
              >
                <ListGroup.Item>
                  <p style={{ fontSize: "30px" }}>Tech Stack</p>
                  <br />
                  <dl class="row">
                    <dt class="col-sm-3">Languages</dt>
                    <dd class="col-sm-9">
                      Javascript, using Node JS and browsers as environments
                    </dd>
                  </dl>
                  <dl class="row">
                    <dt class="col-sm-3">Testing</dt>
                    <dd class="col-sm-9">
                      Test Driven Development (TDD), Jest, Supertest
                    </dd>
                  </dl>
                  <dl class="row">
                    <dt class="col-sm-3">Back-End</dt>
                    <dd class="col-sm-9">
                      HTML, CSS, React, Lighthouse, and other accessbility tools
                    </dd>
                  </dl>
                  <dl class="row">
                    <dt class="col-sm-3">Front-End</dt>
                    <dd class="col-sm-9">SQL, PSQL, Seeding, Migrations</dd>
                  </dl>
                  <dl class="row">
                    <dt class="col-sm-3">Hosting</dt>
                    <dd class="col-sm-9">CloudFlare, Netlify, Render</dd>
                  </dl>
                  <dl class="row">
                    <dt class="col-sm-3">Soft Skills</dt>
                    <dd class="col-sm-9">
                      Paired programming, technical communication, SDL, agile
                      and SCRUM
                    </dd>
                  </dl>
                </ListGroup.Item>
              </ListGroup>
            </section>
          )}

          <h2 style={{ color: "white", textAlign: "center" }}>Projects</h2>
          <div
            style={{
              display: "flex",
              textAlign: "center",
              marginLeft: "30px",
              marginRight: "30px",
              marginBottom: "30px",
            }}
          >
            <Row xs={1} md={2} className="g-4">
              <Col>
                <Card style={{ backgroundColor: "lightgray" }}>
                  <Card.Body>
                    <Card.Title>
                      <span style={{ color: "red" }}>NC</span>-News{" "}
                      <FontAwesomeIcon icon={faNewspaper} />
                    </Card.Title>
                    <Card.Text
                      style={{
                        backgroundColor: "white",
                        borderRadius: "10px",
                        padding: "5px",
                      }}
                    >
                      This a reddit-style news application which users can
                      navigate through the page and view articles. <br />A
                      feature developed was users can filter the page of
                      articles by the topic they would like to view (Coding,
                      football, cooking). <br />
                      Users can click on an article to view a more detailed
                      version of the article. <br />
                      Users can leave comments on articles as well as delete
                      their comment posted. <br />
                      Another feature that was developed was users can UpVote or
                      DownVote the article which would reflect within the
                      back-end api.
                    </Card.Text>
                    <ListGroup
                      style={{ textAlign: "center", paddingBottom: "20px" }}
                    >
                      <ListGroup.Item style={{ marginTop: "10px" }}>
                        <dl class="row">
                          <dt class="col-sm-3">Back-End</dt>
                          <dd class="col-sm-9">
                            Javascript, PSQL, SQL, Jest, Supertest, Express,
                            Husky
                          </dd>
                        </dl>
                        <dl class="row">
                          <dt class="col-sm-3">Front-End</dt>
                          <dd class="col-sm-9">React, Material UI</dd>
                        </dl>
                      </ListGroup.Item>
                    </ListGroup>
                    <div>
                      <p
                        style={{ display: "flex", flexDirection: "column" }}
                        className="d-inline-flex p-2"
                      >
                        Back End:{" "}
                        <a
                          href="https://github.com/sajjmoSD/nc-news"
                          style={{
                            fontSize: "30px",
                          }}
                          target="_blank"
                        >
                          <FontAwesomeIcon
                            icon={faGithub}
                            style={{ textDecoration: "none" }}
                          />
                        </a>
                      </p>
                      <p
                        style={{
                          display: "flex",
                          flexDirection: "column",
                        }}
                        className="d-inline-flex p-2"
                      >
                        Front End:{" "}
                        <a
                          href="https://github.com/sajjmoSD/nc_news"
                          style={{
                            fontSize: "30px",
                          }}
                          target="_blank"
                        >
                          <FontAwesomeIcon icon={faGithubAlt} />
                        </a>
                      </p>
                      <p
                        style={{
                          display: "flex",
                          flexDirection: "column",
                        }}
                        className="d-inline-flex p-2"
                      >
                        Hosted Application:{" "}
                        <a
                          href="https://smnews123.netlify.app"
                          style={{
                            fontSize: "30px",
                          }}
                          target="_blank"
                        >
                          <i class="fa-solid fa-link"></i>
                        </a>
                      </p>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card style={{ backgroundColor: "lightgray" }}>
                  <Card.Body>
                    <Card.Title>
                      <span style={{ color: "green" }}>Plant</span>Pal{" "}
                      <FontAwesomeIcon
                        style={{ color: "green" }}
                        icon={faPagelines}
                      />
                    </Card.Title>
                    <Card.Text
                      style={{
                        backgroundColor: "white",
                        borderRadius: "10px",
                        padding: "5px",
                      }}
                    >
                      PlantPal is a cross-platform mobile application that helps
                      users look after their houseplants. <br />
                      Users can take a picture of a plant, and would get a
                      response of different plants matching the picture taken.
                      When plant is selected, the species is auto filled on
                      plant information screen. <br /> The species is then
                      pinged to a third-party API which, retrieves further
                      information of plant
                      <br />
                      The Front-End was created using React Native Expo and
                      Styled Components. <br />
                      The backend API was built using MongoDB, Axios, and
                      Express.
                    </Card.Text>
                    <ListGroup
                      style={{ textAlign: "center", paddingBottom: "20px" }}
                    >
                      <ListGroup.Item style={{ marginTop: "10px" }}>
                        <dl class="row">
                          <dt class="col-sm-3">Back-End</dt>
                          <dd class="col-sm-9">MongoDB, Axios, Express</dd>
                        </dl>
                        <dl class="row">
                          <dt class="col-sm-3">Front-End</dt>
                          <dd class="col-sm-9">
                            React Native Expo, Styled Components
                          </dd>
                        </dl>
                      </ListGroup.Item>
                    </ListGroup>
                    <div>
                      <p
                        style={{ display: "flex", flexDirection: "column" }}
                        className="d-inline-flex p-2"
                      >
                        Back End:{" "}
                        <a
                          href="https://github.com/sajjmoSD/plant-pal"
                          style={{
                            fontSize: "30px",
                          }}
                          target="_blank"
                        >
                          <FontAwesomeIcon
                            icon={faGithub}
                            style={{ textDecoration: "none" }}
                          />
                        </a>
                      </p>
                      <p
                        style={{
                          display: "flex",
                          flexDirection: "column",
                        }}
                        className="d-inline-flex p-2"
                      >
                        Front End:{" "}
                        <a
                          href="https://github.com/sajjmoSD/PlantPal"
                          style={{
                            fontSize: "30px",
                          }}
                          target="_blank"
                        >
                          <FontAwesomeIcon icon={faGithubAlt} />
                        </a>
                      </p>
                      <p
                        style={{
                          display: "flex",
                          flexDirection: "column",
                        }}
                        className="d-inline-flex p-2"
                      >
                        Youtube demonstration:{" "}
                        <a
                          href="https://www.youtube.com/watch?v=cWCqloX4GWY"
                          style={{
                            fontSize: "30px",
                          }}
                          target="_blank"
                        >
                          <i class="fa-solid fa-link"></i>
                        </a>
                      </p>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card style={{ backgroundColor: "lightgray" }}>
                  <Card.Body>
                    <Card.Title>
                      Digital Clock <FontAwesomeIcon icon={faClock} />
                    </Card.Title>
                    <Card.Text
                      style={{
                        backgroundColor: "white",
                        borderRadius: "10px",
                        padding: "5px",
                      }}
                    >
                      This is an application developed by HTML, CSS with an
                      inclusion of JavaScript. <br />
                      This displays the real time regardless of location by
                      extracting the time via Hours, Minutes and Seconds from
                      the source computer.
                    </Card.Text>
                    <ListGroup
                      style={{ textAlign: "center", paddingBottom: "20px" }}
                    >
                      <ListGroup.Item style={{ marginTop: "10px" }}>
                        <dl class="row">
                          <dt class="col-sm-3">Front-End</dt>
                          <dd class="col-sm-9">HTML, CSS, JS</dd>
                        </dl>
                      </ListGroup.Item>
                    </ListGroup>
                    <div>
                      <p
                        style={{
                          display: "flex",
                          flexDirection: "column",
                        }}
                        className="d-inline-flex p-2"
                      >
                        Front End:{" "}
                        <a
                          href="https://github.com/sajjmoSD/DIgital-Clock"
                          style={{
                            fontSize: "30px",
                          }}
                          target="_blank"
                        >
                          <FontAwesomeIcon icon={faGithubAlt} />
                        </a>
                      </p>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card style={{ backgroundColor: "lightgray" }}>
                  <Card.Body>
                    <Card.Title>
                      <span style={{ color: "blue" }}>Co</span>
                      <span style={{ color: "yellow" }}>lours</span>{" "}
                      <span style={{ color: "orange" }}> Ga</span>
                      <span style={{ color: "cyan" }}>me</span>
                    </Card.Title>
                    <Card.Text
                      style={{
                        backgroundColor: "white",
                        borderRadius: "10px",
                        padding: "5px",
                      }}
                    >
                      This is a HTML, CSS and JavaScript developed application
                      which, when executed will allow the user to choose a
                      colour between a different number of tiles depending on
                      what difficulty the user chooses if, user selects the
                      correct colour the background of application will change
                      to corresponding colour.
                    </Card.Text>
                    <ListGroup style={{ textAlign: "center" }}>
                      <ListGroup.Item style={{ marginTop: "10px" }}>
                        <dl class="row">
                          <dt class="col-sm-3">Front-End</dt>
                          <dd class="col-sm-9">HTML, CSS, JS</dd>
                        </dl>
                      </ListGroup.Item>
                    </ListGroup>
                    <div>
                      <p
                        style={{
                          display: "flex",
                          flexDirection: "column",
                        }}
                        className="d-inline-flex p-2"
                      >
                        Front End:{" "}
                        <a
                          href="https://github.com/sajjmoSD/colours-Game"
                          style={{
                            fontSize: "30px",
                          }}
                          target="_blank"
                        >
                          <FontAwesomeIcon icon={faGithubAlt} />
                        </a>
                      </p>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
          <section id="contactMe">
            <div
              style={{
                textAlign: "center",
                backgroundColor: "black",
              }}
            >
              <h3 style={{ color: "white", paddingTop: "10px" }}>
                Contact <span style={{ color: "red" }}>Me</span>
              </h3>
              <p
                style={{
                  color: "white",
                  display: "flex",
                  flexDirection: "column",
                }}
                className="d-inline-flex p-2"
              >
                GitHub
                <a
                  href="https://github.com/sajjmoSD"
                  style={{ fontSize: "50px" }}
                >
                  <i class="fa-brands fa-square-github"></i>
                </a>
              </p>
              <p
                style={{
                  color: "white",
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "30px",
                  marginRight: "30px",
                }}
                className="d-inline-flex p-2"
              >
                LinkedIn
                <a
                  href="https://www.linkedin.com/in/mohammedsajjadul/"
                  style={{ fontSize: "50px" }}
                >
                  <i class="fa-brands fa-linkedin"></i>
                </a>
              </p>
              <p
                style={{
                  color: "white",
                  display: "flex",
                  flexDirection: "column",
                }}
                className="d-inline-flex p-2"
              >
                Email
                <a
                  href="mailto:mohammedsajjadul@gmail.com"
                  style={{ fontSize: "50px" }}
                >
                  <i class="fa-solid fa-envelope"></i>
                </a>
              </p>
            </div>
          </section>
        </>
      )}
    </>
  );
}
