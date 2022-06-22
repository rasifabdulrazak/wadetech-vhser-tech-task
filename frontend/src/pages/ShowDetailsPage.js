import React,{useState,useEffect} from 'react'

import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'

import { Container, Row, Col, Form, Button,Table } from "react-bootstrap";
import { useForm } from "react-hook-form";
import axios from "axios";
import { PlusCircle, Trash } from "react-bootstrap-icons";
import { useParams } from 'react-router-dom';



const ShowDetailsPage = () => {
  const params = useParams()
  const {
    register,
    handleSubmit,
  } = useForm();
  const [services,setServices] = useState()
  const [total,setTotal] = useState()
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  const [today,setToday] = useState(date)
  const onSubmit = async (e)=>{
    e['services']=services
    console.log(e)
    e['org'] = params.id
    e['total'] = total
  
    try {
      await axios.post(`http://localhost:8000/api/submit/`,e)
    } catch (error) {
      
    }
  }

  const fetchData = async ()=>{
    try {
        const {data} = await axios.get(`http://localhost:8000/vehicle/services/`)
        console.log(data)
        let sum=0
        for(let i=0;i<data.length;i++){
          sum+=data[i]['service_amount']

        }
        setTotal(sum)
        console.log(sum)
        setServices(data)

    } catch (error) {
        console.log(error)
    }
}
const deleteService = async (e,amt)=>{
  try {
    setTotal(total-amt)
    let ser = services.filter((value)=>value.id!==e)
    setServices(ser)
  } catch (error) {
    console.log(error)
  }
}


useEffect(()=>{
    fetchData()
},[])
  return (
    <>
    <Header />
    <Container>
    <Form onSubmit = {handleSubmit(onSubmit)}>
        <Row>
            <Col sm={6}>
         
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

        
       
            </Col>
            <Col sm={6}>
                
            </Col>
        </Row>
        <Row>
        <Row className="mt-5 mb-5">
        <div className="shadow-lg">
          <Table striped bordered hover>
            <thead
              style={{
                backgroundColor: "brown",
                borderRadius: "1rem",
                color: "white",
              }}
            >
              <tr>
                <th>Service Type</th>
                <th className="text-end">Amount</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
             {services && services.map((value)=> <tr>
                <td>
                
                  {value.service_type}
                </td>
                <td className="text-end">{value.service_amount}</td>
                <td className="text-center">
                  <Trash onClick={()=>deleteService(value.id,value.service_amount)} width={20} height={20} />
                 
                </td>
              </tr>)}
            </tbody>
          </Table>
          <div className="text-end m-2">
            <h3>Total Amount :{total && total} </h3>
          </div>
          <div className="text-end m-2">
            <Button
              type='submit'
              style={{
                backgroundColor: "brown",
                borderRadius: "5px",
                color: "white",
              }}
              className="m-2"
            >
              Save
            </Button>
            <Button
              style={{
                backgroundColor: "brown",
                borderRadius: "5px",
                color: "white",
              }}
              className="m-2"
            >
              Update
            </Button>
            <Button
              style={{
                backgroundColor: "brown",
                borderRadius: "5px",
                color: "white",
              }}
              className="m-2"
            >
              Cancel
            </Button>
          </div>
        </div>
      </Row>
        
        </Row>
        </Form>

    </Container>
    <Footer />
    </>
  )
}

export default ShowDetailsPage