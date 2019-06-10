/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const SocialFooter = props => (
    <div className="copyrights">
        <Container className="container">
            <Row>
                <Col lg={12} md={12} sm={12} xs={12} className="text-center">
                    <a className="topbutton dmtop"><i className="fa fa-angle-up"></i></a>
                    <div className="copyright-text">
                        <p>By <a href="https://novacode.com.mx">NovaCode</a></p>
                    </div>
                    <div className="copyrights-social">
                        <a href="#"><i className="fa fa-facebook"></i></a>
                        <a href="#"><i className="fa fa-twitter"></i></a>
                        <a href="#"><i className="fa fa-google-plus"></i></a>
                        <a href="#"><i className="fa fa-reddit"></i></a>
                        <a href="#"><i className="fa fa-youtube"></i></a>
                        <a href="#"><i className="fa fa-behance"></i></a>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
);

export default SocialFooter;