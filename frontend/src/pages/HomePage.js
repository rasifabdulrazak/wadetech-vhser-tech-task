import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Logo from '../components/Logo/Logo'
import ServiceComponent from '../components/ServiceComponent/ServiceComponent'

const HomePage = () => {
  return (
    <>
    <Header />
    <Container>
        <Row>
            <Col sm={6}>
            <Logo />
            </Col>
            <Col sm={6}>
            <ServiceComponent />
            </Col>
            
           

        </Row>
        
        </Container>
        <Footer />

        </>
  )
}

export default HomePage