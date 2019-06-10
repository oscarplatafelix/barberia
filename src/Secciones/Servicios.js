/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';
import { fadeInRight } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';
const styles = StyleSheet.create({
    fadeInRight: {
        animationName: fadeInRight,
        animationDuration: '2s'
    },
})
class Servicios extends React.Component {
    state = {
        startAnimation: false
    }
    render() {
        return (
            <ScrollAnimation animateIn='fadeIn' duration={0} afterAnimatedIn={() => this.setState({ startAnimation: true })}>
                <section className="section" id="servicios">
                    <Container className="container">
                        <div className="section-title text-center">
                            <h4>Conoce más sobre nosotros</h4>
                            <h3>Servicios</h3>
                            <hr />
                        </div>
                        <div className={this.state.startAnimation ? css(styles.fadeInRight) : undefined} onAnimationEnd={() => this.setState({ startAnimation: false })}>
                            <Row className="text-center">
                                <Col md={3} lg={3} sm={6} xs={12}>
                                    <div className="service-image">
                                        <Image roundedCircle={true} thumbnail={true} src="upload/service_02.jpg" alt="" />
                                        <h3>SHAVES</h3>
                                    </div>
                                    <div className="service-small-desc">
                                        <p style={{ textAlign: 'justify' }}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected materials.</p>
                                    </div>
                                </Col>
                                <Col md={3} lg={3} sm={6} xs={12}>
                                    <div className="service-image">
                                        <Image roundedCircle={true} thumbnail={true} src="upload/service_02.jpg" alt="" className="img-responsive img-circle" />
                                        <h3>HAIR CUT</h3>
                                    </div>
                                    <div className="service-small-desc">
                                        <p style={{ textAlign: 'justify' }}>Rem Ipsum available, but the majority have suffered alteratio here are many variations of passages of Lon in some form, by injected sonderson.</p>
                                    </div>
                                </Col>
                                <Col md={3} lg={3} sm={6} xs={12}>
                                    <div className="service-image">
                                        <Image roundedCircle={true} thumbnail={true} src="upload/service_03.jpg" alt="" className="img-responsive img-circle" />
                                        <h3>HAIR WASH</h3>
                                    </div>
                                    <div className="service-small-desc">
                                        <p style={{ textAlign: 'justify' }}>Passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected hu There are many matifesto ofmour.</p>
                                    </div>
                                </Col>
                                <Col md={3} lg={3} sm={6} xs={12}>
                                    <div className="service-image">
                                        <Image roundedCircle={true} thumbnail={true} src="upload/service_04.jpg" alt="" className="img-responsive img-circle" />
                                        <h3>FACE MASK</h3>
                                    </div>
                                    <div className="service-small-desc">
                                        <p style={{ textAlign: 'justify' }}>Ssages of Lorem Ipsum available, but the majority have suffered There are many variations of pa alteration in some form, by son of the humour.</p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <hr className="invis" />
                        <div className="with-desc">
                            <Image src="upload/section_01.png" alt="" fluid={true} />
                            <div className="desc-wrap">
                                <h3>Conoce la barberia</h3>
                                <h4>Experto en corte de cabello y barba</h4>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                            </div>
                        </div>
                    </Container>
                </section>
            </ScrollAnimation>
        );
    }
}
export default Servicios;