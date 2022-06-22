import React, { useState,useEffect } from "react";
import { Button, Container, Row, Table, Form } from "react-bootstrap";
import { PlusCircle, Trash } from "react-bootstrap-icons";
import axios from "axios";
import VehicleComponent from "../VehicleComponent/VehicleComponent";

const TableComponent = (props) => {
  const [services,setServices] = useState()
  const [total,setTotal] = useState()
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
const deleteService = async (e)=>{
  try {
    await axios.delete(`http://localhost:8000/vehicle/services/${e}`)
    fetchData()
  } catch (error) {
    console.log(error)
  }
}


useEffect(()=>{
    fetchData()
},[])


  return (
    <Container>
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
                  <Trash onClick={()=>deleteService(value.id)} width={20} height={20} />
                 
                </td>
              </tr>)}
            </tbody>
          </Table>
          <div className="text-end m-2">
            <h3>Total Amount :{total && total} </h3>
          </div>
          <div className="text-end m-2">
            <Button
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


    </Container>
  );
};

export default TableComponent;
