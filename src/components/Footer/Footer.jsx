import React from 'react'
import { Container, Nav, Row, Col } from "react-bootstrap";
import logo from '../../assets/logo.png'
import "./footer.css";

const Footer = () => {
  return (
    <footer className='py-4'>
        <Container>
            <div className='d-flex align-items-center justify-content-between flex-lg-row flex-column-reverse'>
              <div>
                <img src={logo} alt="" />
              </div>
              <div>
                <span className='text'>Made by the expert team of Zero21</span>
              </div>
              <Nav>
                <Nav.Link href="/#">Terms of Use</Nav.Link>
                <Nav.Link href="/#">Privacy Policy</Nav.Link>
              </Nav>
            </div>
        </Container>
    </footer>
  )
}

export default Footer