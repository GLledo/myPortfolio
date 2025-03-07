import React from 'react'

import "./about.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Profile from "../../../assets/img/profile/img_profile.JPG";
import Image from "react-bootstrap/Image";

const About = () => {

    return (
        <div id="about">
          <div className="about">
            <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
            <Container>
              <Row className="pt-3 pb-5 align-items-center">
                <Col xs={12} md={6}>
                  <Row className="justify-content-center mb-2 mr-2 ">
                    <Image className="profile justify-content-end" alt="profile" src={Profile} thumbnail fluid />
                  </Row>
                </Col>
                <Col xs={12} md={6}>
                  <Row className=" align-items-start p-2 my-details rounded">
                    Hi there! I am <strong>&nbsp;Anand Kumar Jha</strong>
                    <br />A passionate programmer and a Coach, born and brought up in India. I am a Full Stack Web Developer with React.js, Redux, Express.js, Node.js, and PostgreSQL as my tech stack.
                    <br />
                    In 2019, I successfully completed my Engineering with specialization in 'Electronics and Telecommunication'.
                    <br />
                    Working with the clients, my goal is always driven towards providing amazing experience with the best level of quality and service to them.
                    <br />
                    Along with that, I also help people as a COACH on their journey of becoming a professional programmer. I love learning about new technologies, what problems are they solving and How can I use them to build better and scalable products.
                    <br /> <br />
                  </Row>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      );

};

export default About;