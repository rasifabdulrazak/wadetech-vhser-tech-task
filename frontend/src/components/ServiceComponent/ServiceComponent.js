import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import axios from 'axios'

import { useNavigate } from "react-router-dom";

const ServiceComponent = () => {
    const [services,setServices] = useState([])
    const navigate = useNavigate()

    const fetchData = async ()=>{
        try {
            const {data} = await axios.get(`http://localhost:8000/vehicle/organisation/`)
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
      { services.length>0 && services.map((value,index)=>  <Row 
      onClick={()=>navigate(`/service_details/${value.id}`)}
      className="mt-5">
       
   {value.org_name}



    
      
      </Row>)}

    </Container>
  );
};

export default ServiceComponent;
