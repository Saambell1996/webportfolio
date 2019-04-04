import React, { Component } from "react";
import {
  Col,
  Row,
  Container,
  Button,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  CardImg,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";
import ScrollAnimation from "react-animate-on-scroll";
var Spinner = require("react-spinkit");

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      loading: true
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  hideSpinner = () => {
    this.setState({
      loading: false
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="about">
          <div className="name">
            <div id="about-me" />
            <h1>About Me</h1>
          </div>
       

          <ScrollAnimation animateIn="bounceInRight" duration="1.5" animateOnce="true">
            <Container>
              <div className="personal-section">
                <Row>
                  <Col md="4">
                    <Card>
                      <CardHeader>Sam Bell</CardHeader>

                      <CardBody>
                        <img
                          src="images/pp.jpg"
                          class="img-fluid img-rounded"
                        />
                      </CardBody>
                    </Card>
                  </Col>
                  <Col md="8">
                    <h1>
                      Hey, I'm a Web Developer from Newcastle, I can help
                      you build your next website and advertise your business more efficently!
                    </h1>
                    <p className="about-text">
                      I've been a <span>Web developer</span> for
                      the past 3 years, honing my current skillset and
                      picking up a lot of useful tips and tricks along the way!
                      I have been utilizing <span>ReactJS</span> into my front
                      end capabilities and even had the chance to help deliver a{" "}
                      <span>front end application</span> {" "}
                      that would be used by professional athletes, to prepare
                      for the Olympics! Besides front end, I have also worked on
                      a completely different spectrum of work, aiding in
                      creating <span>3D Models</span> and virtual environments for 
                      various clients!
                      <br />
                    </p>
                  </Col>
                </Row>
                <div className="seperator-line" />
                <div className="personal-photos">
                
                <Row>
                    <Col md="5">
                      <img src="images/persona.gif" class="img-fluid" />
                      <div className="website-link-button">
                        <Button color="dark">
                          <a href="https://saambell1996.github.io/">
                            Link to site
                          </a>
                        </Button>
                      </div>
                    </Col>
                    <Col md="7">
                      <div className="cherry-text">
                        <h2>Thieves Guild Site</h2>
                        <p>
                          One of my first real attempts at a dynamic site came
                          bundled in the form of a fan-site for a game that I
                          had recently just put over 200+ hours into. This was
                          my first actual attempt at using and implementing
                          Bootstrap and JavaScript into one of my sites and came
                          out with pretty neat looking results that didn't look
                          too basic or boring. The site served as an information
                          resource were user could find tips and general
                          information about the game all in one place. Although
                          only a fan-site and nothing that really gained any
                          profit, I was at one point maintaining over 200-300
                          viewers (found via Google Analytics). This was a very
                          fun and colourful project to work on and one that I've
                          kept hosted for a while now to look back on and see
                          how far my work has come along.
                        </p>
                      </div>
                    </Col>
                  </Row>
                  <div className="seperator-line" />
                  <Row>
                    <Col md="5">
                      <div class="resp-container">
                        <iframe
                          width="345"
                          height="240"
                          src="https://sketchfab.com/models/833a44cb4b7147ac83f050972e4ccfe0/embed"
                          frameborder="0"
                          allow="autoplay; fullscreen; vr"
                          mozallowfullscreen="true"
                          webkitallowfullscreen="true"
                          className="resp-iframe"
                        />
                      </div>
                    </Col>
                    <Col md="7">
                      <div className="cherry-text">
                        <h2>Low Poly Models</h2>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries, but also the leap
                          into electronic typesetting, remaining essentially
                          unchanged. It was popularised in the 1960s with the
                          release of Letraset sheets containing Lorem Ipsum
                          passages, and more recently with desktop publishing
                          software like Aldus PageMaker including versions of
                          Lorem Ipsum.
                        </p>
                        <p>
                          It was popularised in the 1960s with the release of
                          Letraset sheets containing Lorem Ipsum passages, and
                          more recently with desktop publishing software like
                          Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                      </div>
                    </Col>
                  </Row>
                  <div className="seperator-line-extra" />
                 

                  

                  
               
                </div>
              </div>
            </Container>
            <br />
          </ScrollAnimation>
        </div>
        <div>
          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            className={this.props.className}
          >
            <ModalHeader toggle={this.toggle}>Cherry Picker</ModalHeader>
            <ModalBody>
              <div className="modal-video-holder">
                {this.state.loading ? (
                  <div className="cube-container">
                    <div className="sk-folding-cube">
                      <div className="sk-cube1 sk-cube" />
                      <div className="sk-cube2 sk-cube" />
                      <div className="sk-cube4 sk-cube" />
                      <div className="sk-cube3 sk-cube" />
                    </div>
                  </div>
                ) : null}
                <iframe
                  id="kmsembed-0_0gfeleq8"
                  onLoad={this.hideSpinner}
                  width="400"
                  height="300"
                  src="https://mediaexchange.accenture.com/embed/secure/iframe/entryId/0_0gfeleq8/uiConfId/27188232"
                  class="kmsembed"
                  allowfullscreen
                  webkitallowfullscreen
                  mozAllowFullScreen
                  allow="autoplay *; fullscreen *; encrypted-media *"
                  frameborder="0"
                  title="Cherry Picker"
                />
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="secondary" onClick={this.toggle}>
                Close
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      </React.Fragment>
    );
  }
}
