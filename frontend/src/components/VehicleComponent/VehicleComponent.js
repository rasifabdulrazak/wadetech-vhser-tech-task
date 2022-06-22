import React from "react";
import { Container, Row, Form, Button } from "react-bootstrap";

const VehicleComponent = () => {
  return (
    <Container>
      <Row className="mt-5 ">
        <div className='shadow-lg p-5'  style={{borderRadius:'5px'}}>
        
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{ color: "#A52A2A",fontWeight:'bold' }}>Date</Form.Label>
            <Form.Control type="date" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label style={{ color: "#A52A2A",fontWeight:'bold' }}>Vehicle Model</Form.Label>
            <Form.Control type="text" placeholder="Enter model" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label style={{ color: "#A52A2A",fontWeight:'bold' }}>Customer</Form.Label>
            <Form.Control type="text" placeholder="Enter name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label style={{ color: "#A52A2A",fontWeight:'bold' }}>Mobile Number</Form.Label>
            <Form.Control type="number" placeholder="Enter mobile" />
          </Form.Group>

          {/* <Button variant="primary" type="submit">
            Submit
          </Button> */}
        </Form>
        </div>
      </Row>
    </Container>
  );
};

export default VehicleComponent;
