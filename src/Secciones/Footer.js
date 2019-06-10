/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SocialFooter from '../Componentes/SocialFooter';
class Footer extends React.Component {
    render() {
        return (
            <footer className="footer" id="social">
                <Container>
                    <Row>
                        <Col lg={4} md={4} sm={12} xs={12}>
                            <div className="widget">
                                <div className="logo-title">
                                    <img src="images/flogo.png" alt="" />
                                </div>
                                <div className="about-widget">
                                    <p>
                                        Fusce non nulla quis leo lobortis porttitor. Quisque mi egestas nibh porttitor molestie. Nullam ut orci elit. Suspendisse tincidunt dapibu In nibh es posuere.
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} md={3} sm={12} xs={12}>
                            <div className="widget">
                                <div className="widget-title">
                                    <h4>Horarios</h4>
                                    <hr />
                                </div>
                                <div className="link-widget">
                                    <ul>
                                        <li>Lunes <span>09:00 - 19:00</span></li>
                                        <li>Martes <span>09:00 - 19:00</span></li>
                                        <li>Miercoles <span>09:00 - 19:00</span></li>
                                        <li>Jueves <span>09:00 - 19:00</span></li>
                                        <li>Viernes <span>09:00 - 19:00</span></li>
                                        <li>Sabado <span>CLOSED</span></li>
                                        <li>Domingo <span>CLOSED</span></li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col lg={{span:3, offset:2}} md={{span:3, offset: 2}} sm={12} xs={12} >
                            <div className="widget">
                                <div className="widget-title">
                                    <h4>Menu</h4>
                                    <hr />
                                </div>
                                <div className="link-widget">
                                    <ul>
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#">About us</a></li>
                                        <li><a href="#">Contact us</a></li>
                                        <li><a href="#">Appointment</a></li>
                                        <li><a href="#">Team Members</a></li>
                                        <li><a href="#">FAQs</a></li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <SocialFooter />
            </footer>
        );
    }
}

export default Footer;