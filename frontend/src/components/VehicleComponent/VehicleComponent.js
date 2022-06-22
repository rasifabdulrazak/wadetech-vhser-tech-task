import React, { useState } from "react";
import { Container, Row, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import axios from "axios";

const VehicleComponent = (props) => {
  const {
    register,
    handleSubmit,
  } = useForm();
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  const [today,setToday] = useState(date)
  const onSubmit = async (e)=>{
    console.log(e)
  
    try {
      await axios.post(``)
    } catch (error) {
      
    }
  }

  return (
    <Container>
      <Row className="mt-5 ">
        <div className='shadow-lg p-5'  style={{borderRadius:'5px'}}>
        
        <Form onSubmit = {handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{ color: "#A52A2A",fontWeight:'bold' }}>Date</Form.Label>
            <Form.Control
              {...register("date")}
             type="text" 
             placeholder="Enter email" value={today && today} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label style={{ color: "#A52A2A",fontWeight:'bold' }}>Vehicle Model</Form.Label>
            <Form.Control  {...register("model" )} type="text" placeholder="Enter model" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label style={{ color: "#A52A2A",fontWeight:'bold' }}>Customer</Form.Label>
            <Form.Control  {...register("customer" )} type="text" placeholder="Enter name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label style={{ color: "#A52A2A",fontWeight:'bold' }}>Mobile Number</Form.Label>
            <Form.Control  {...register("number" )} type="number" placeholder="Enter mobile" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        </div>
      </Row>
    </Container>
  );
};

export default VehicleComponent;
