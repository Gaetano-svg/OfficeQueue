import React from "react";
import Card from "react-bootstrap/Card"
import Table from "react-bootstrap/Table"
import Button from "react-bootstrap/Button"
import ListGroup from 'react-bootstrap/ListGroup';

const Counters = (props) => {
//todo: onClick API.setFreeCounter che manda al server l'id del counter free.

return <>
<ListGroup variant="flush">
 
 
 <ListGroup.Item className="p-3 list-title">
{<h5 className=" p-3 mb-2 bg-white text-dark"> Number called : {props.number} </h5> } 
          </ListGroup.Item>
          {props.counters.map((count, index) => (
            <ListGroup.Item className=" p-3 mb-2 bg-white text-dark"
              action
              key={index}
              id={index}
            
            >
            Counter {count.counterCode} &nbsp;
           
             
             <Button variant="success" type="button" onClick = {() =>{props.nextNumber(count.counterCode)}}>{'Next one'}</Button>
             
            </ListGroup.Item>
          ))}
  
  </ListGroup>
 </>



}


export default Counters;