import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';
import { headShake } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';
const styles = StyleSheet.create({
    swing: {
        animationName: headShake,
        animationDuration: '1s'
    },
})
class Precios extends React.Component {
    state = {
        startAnimation: false
    };
    render() {
        return (
            <ScrollAnimation animateIn='fadeIn' duration={0} afterAnimatedIn={() => this.setState({ startAnimation: true })}>
                <section className="section lb" id="precios">
                    <Container>
                        <div className="section-title text-center">
                            <h4>Consulta</h4>
                            <h3>Nuestros Precios</h3>
                            <hr />
                        </div>
                        <div className={this.state.startAnimation ? css(styles.swing) : undefined} onAnimationEnd={()=>this.setState({startAnimation: false})}>
                        <Row>
                                <Col md={4} lg={4} sm={12} xs={12}>
                                    <div className="pricing-box-01 clearfix wow fadeIn">
                                        <div className="eat-detail">
                                            <h3>Shave</h3>
                                            <hr />
                                            <h4>Name of Service</h4>
                                            <p>Small Detail for the awesome service</p>
                                            <span>$44.00</span>
                                        </div>
                                        <div className="eat-detail">
                                            <h3>Face Mask</h3>
                                            <hr />
                                            <h4>Name of Service</h4>
                                            <p>Small Detail for the awesome service</p>
                                            <span>$120.00</span>
                                        </div>
                                    </div>
                                </Col>
                                {/* m40 */}
                                <Col md={4} lg={4} sm={12} xs={12}>
                                    <div className="pricing-box-01 clearfix wow fadeIn">
                                        <div className="ribbon-wrapper-pt2">
                                            <div className="ribbon-pt2">Featured</div>
                                        </div>
                                        <div className="eat-detail">
                                            <h3>Hair Cut</h3>
                                            <hr />
                                            <h4>Name of Service</h4>
                                            <p>Small Detail for the awesome service</p>
                                            <span>$44.00</span>
                                        </div>
                                        <div className="eat-detail">
                                            <h3>Hair Paint</h3>
                                            <hr />
                                            <h4>Name of Service</h4>
                                            <p>Small Detail for the awesome service</p>
                                            <span>$120.00</span>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={4} lg={4} sm={12} xs={12}>
                                    <div className="pricing-box-01 clearfix wow fadeIn">
                                        <div className="eat-detail">
                                            <h3>Spa & Health</h3>
                                            <hr />
                                            <h4>Name of Service</h4>
                                            <p>Small Detail for the awesome service</p>
                                            <span>$44.00</span>
                                        </div>
                                        <div className="eat-detail">
                                            <h3>Custom service</h3>
                                            <hr />
                                            <h4>Name of service</h4>
                                            <p>Small Detail for the awesome service</p>
                                            <span>$120.00</span>
                                        </div>
                                    </div>
                                </Col>
                        </Row>
                        </div>
                    </Container>
                </section>
            </ScrollAnimation>
        );
    }
}

export default Precios;