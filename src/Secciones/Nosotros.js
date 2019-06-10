/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';
import { fadeInLeft, fadeInRight } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';
const styles = StyleSheet.create({
    fadeInLeft: {
        animationName: fadeInLeft,
        animationDuration: '2s'
    },
    fadeInRight: {
        animationName: fadeInRight,
        animationDuration: '2s'
    },
})
class Nosotros extends React.Component {
    state = {
        startAnimation: false
    }
    render() {
        return (
            <ScrollAnimation animateIn='fadeIn' duration={0} afterAnimatedIn={() => this.setState({ startAnimation: true })}>
                <section className="section lb" id="nosotros">
                    <Container>
                        <Row className="first-wrapper">
                            <Col md={5} lg={5} sm={12} xs={12} className="welcome-widget">
                                <div className={this.state.startAnimation ? css(styles.fadeInLeft) : undefined} onAnimationEnd={()=>this.setState({startAnimation:false})}>
                                    <div className="section-title text-left">
                                        <h4>Bienvenido a Bordo</h4>
                                        <h3>Somos MyBarberia</h3>
                                        <hr />
                                    </div>
                                    <p style={{ textAlign: 'justify' }}>
                                        La barberia suele ser más que un área para obtener un peinado o corte de cabello,
                                        es un centro para socializar e intercambiar sugerencias. MyBarberia  una barberia con sede
                                        en Culiacán, Sinaloa.
                                    </p>
                                    <a href="#" className="btn btn-primary">NovaCode</a>
                                </div>
                            </Col>
                            <Col md={4} lg={4} sm={12} xs={12}>
                                <Row className="welcome-images">
                                    <Col md={6} lg={6} xs={6} sm={6} className="img-wrap">
                                        <div className="entry">
                                            <Image src="upload/welcome_01.jpg" alt="" fluid={true} className={this.state.startAnimation ? css(styles.fadeInLeft) : undefined}/>
                                        </div>
                                    </Col>
                                    <Col md={6} lg={6} xs={6} sm={6} className="img-wrap">
                                        <div className="entry">
                                            <Image src="upload/welcome_02.jpg" alt="" fluid={true} className={this.state.startAnimation ? css(styles.fadeInRight) : undefined}/>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={3} lg={3} sm={12} xs={12}>
                                <div className={this.state.startAnimation ? css(styles.fadeInRight) : undefined}>
                                    <div className="section-title text-left">
                                        <h4>6677 77 77 88</h4>
                                        <h3>Horarios de Trabajo</h3>
                                        <hr />
                                    </div>
                                    <ul className="openinghours">
                                        <li><span>Lunes</span> <small>09:00 - 19:00</small></li>
                                        <li><span>Martes</span> <small>09:00 - 19:00</small></li>
                                        <li><span>Miercoles</span> <small>09:00 - 19:00</small></li>
                                        <li><span>Jueves</span> <small>09:00 - 19:00</small></li>
                                        <li><span>Viernes</span> <small>09:00 - 19:00</small></li>
                                        <li><span>Sabado</span> <small>12:00 - 21:00</small></li>
                                        <li><span>Domingo</span> <small>Closed</small></li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </ScrollAnimation>
        );
    }
}

export default Nosotros;