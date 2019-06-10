/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Container, Row, Col, Image, Navbar, Nav } from 'react-bootstrap';
import Scrollspy from 'react-scrollspy';
class Header extends React.Component {
    state = {
        top: 0,
        height: 0,
        scroll: 0,
        isTop: true
    }
    handleScroll() {
        this.setState({ scroll: window.scrollY }, () => {
            if (this.state.scroll > this.state.top) {
                this.setState({ isTop: false });
            } else {
                this.setState({ isTop: true });
            }
        });
    }
    componentDidMount() {
        const el = document.querySelector('#navbar');
        this.setState({ top: el.offsetTop, height: el.offsetHeight });
        window.addEventListener('scroll', this.handleScroll.bind(this));
    }
    onActive(e){
        console.log("E", e);
    }
    render() {
        return (
            <header className={this.state.isTop ? 'header' : 'header affix'}>
                <Container>
                    <Navbar expand="lg md" collapseOnSelect className="navbar navbar-default yamm">
                        <Navbar.Brand href="#home">
                            <Image src="images/logo.png" alt="" fluid={true} />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="" />
                        <Navbar.Collapse id="navbar">
                            <Nav>
                                <Scrollspy items={['nosotros', 'servicios', 'precios', 'social']} currentClassName="isActive"
                                    style={{ display: 'contents', msFlexDirection: 'column', flexDirection: 'column', paddingLeft: 0, marginBottom: 0, listStyle: 'none' }}>
                                    <Nav.Link onClick={this.onActive} id="hola" href="#nosotros">Nosotros</Nav.Link>
                                    <Nav.Link href="#servicios">Servicios</Nav.Link>
                                    <Nav.Link href="#precios">Precios</Nav.Link>
                                    <Nav.Link href="#social">Redes Sociales</Nav.Link>
                                </Scrollspy>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Container>
            </header>
        );
    }
};

export default Header;