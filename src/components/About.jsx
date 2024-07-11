import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './about.css';

Aos.init();
export default function About() {
  return (
    <div className="py-5 ">
      <Container>
        <h2 className='text-center mx-5 fs-1 fw-bolder text-primary text-decoration-underline mb-5'
        data-aos="fade-up">About</h2>

        <Row className="align-items-center">
          <Col xs={12} lg={4} className="mb-4 mb-lg-0">
            <img src="/about.jpg" alt="About" className="img-fluid rounded shadow float-animation" data-aos="fade-right"/>
          </Col>
          <Col xs={12} lg={8} className="text-center lead text-lg-start">
          <p data-aos="fade-left">Hello! I'm Jeya Chandran S, an MSc Computer Science graduate who recently completed a
             MERN stack certification from the IIT Madras GUVI Bootcamp. I love building dynamic web applications and i'm ready to apply my skills in real-world projects.</p>
            <hr />
            <p data-aos="fade-left">I adapt well to any work environment, whether a fast-paced startup or a 
              well-established company. My expertise includes HTML, CSS, JavaScript, React, Node.js, Bootstrap, and Ant Design, allowing me to create robust and scalable applications.</p>
            <hr />
            <p data-aos="fade-left">I believe in the power of teamwork and enjoy collaborating to achieve common goals.
               I'm known for being a reliable team member, always ready to assist and learn. My goal is to take on challenging projects that push my skills further.</p>
            <hr />
            <p data-aos="fade-left">If you're looking for a dedicated developer to bring your ideas to life,
               I'm excited to contribute to your team. Let's create something amazing together!</p>

          </Col>
        </Row>
      </Container>
    </div>
  );
}
