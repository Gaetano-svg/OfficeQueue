import React from "react";
import Card from "react-bootstrap/Card"
import Table from "react-bootstrap/Table"
import Button from "react-bootstrap/Button"



const Queues = (props) => {
//todo: replace fixed values with data from json file.
    return <>
    
    
         <Card style={{width: '50rem'} }>

            <Card.Body>
                <Card.Title>Available queues</Card.Title>
                <Card.Text>
                    <Table striped borederd hover>
                        <thead>
                            <tr>
                                <th> Request type </th>
                                <th> Front Office</th>
                                <th> Expected waiting time </th>
                                <th> </th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr> <th> Type 1 </th> <th>A</th> <th>15 minutes </th>  <th> <Button variant="success">Book</Button> </th> </tr>                             
                            <tr> <th> Type 2 </th> <th>B</th> <th>10 minutes </th>  <th> <Button variant="success">Book</Button> </th> </tr> 
                            <tr> <th> Type 3 </th> <th>C</th> <th>25 minutes </th>  <th> <Button variant="success">Book</Button> </th> </tr> 

                        </tbody>
                    </Table>
                </Card.Text>
               
            </Card.Body>
         </Card>
     
       
    </>


}

export default Queues;