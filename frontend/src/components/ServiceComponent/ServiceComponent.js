import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import axios from 'axios'
import TableComponent from "../Table/TableComponent";
import { useNavigate } from "react-router-dom";

const ServiceComponent = () => {
    const [services,setServices] = useState([])
    const navigate = useNavigate()

    const fetchData = async ()=>{
        try {
            const {data} = await axios.get(`http://localhost:8000/vehicle/services/`)
            console.log(data)
            setServices(data)

        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        fetchData()
    },[])

  return (
    <Container>
      <Row className="mt-5">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Service Organisation</Form.Label>
          <Form.Select name="status" aria-label="Default select example">
            {services.length>0 && services.map((value,index)=> <option value={value.org_name}>{value.org_name}</option>)}

          </Form.Select>
        </Form.Group>
        <Row >
            <Button onClick={()=>navigate('/service_details')}>Submit</Button>
        </Row>
      </Row>

    </Container>
  );
};

export default ServiceComponent;
