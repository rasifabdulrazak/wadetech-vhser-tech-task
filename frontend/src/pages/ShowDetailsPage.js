import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import TableComponent from '../components/Table/TableComponent'
import VehicleComponent from '../components/VehicleComponent/VehicleComponent'

const ShowDetailsPage = () => {
  return (
    <>
    <Header />
    <Container>
        <Row>
            <Col sm={6}>
                <VehicleComponent />
            </Col>
            <Col sm={6}>
                
            </Col>
        </Row>
        <Row>
            <TableComponent />
        </Row>

    </Container>
    <Footer />
    </>
  )
}

export default ShowDetailsPage