import React, { useState,useEffect } from "react";
import { Button, Container, Row, Table, Form } from "react-bootstrap";
import { PlusCircle, Trash } from "react-bootstrap-icons";
import axios from "axios";

const TableComponent = (props) => {
  const [services,setServices] = useState()
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

  console.log(props.services);
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
              <tr>
                <td>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Select
                      name="status"
                      aria-label="Default select example"
                    >
                      {services && services.map((value)=><option value={value.org_name}>{value.org_name}</option>)}
                    </Form.Select>
                  </Form.Group>
                </td>
                <td className="text-end">Otto</td>
                <td className="text-center">
                  <Trash width={20} height={20} />
                  <PlusCircle width={20} height={20} />
                </td>
              </tr>
            </tbody>
          </Table>
          <div className="text-end m-2">
            <h3>Total Amount : </h3>
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
