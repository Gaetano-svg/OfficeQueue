import React from "react";
import "./App.css";
import Header from "./components/Header";
import Queues from "./components/Queues"
import Counters from "./components/Counters"
import Alert from "./components/Alert"

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Redirect, Route, Link } from 'react-router-dom';
import { Switch } from 'react-router';
import { withRouter } from 'react-router-dom';

import API from './api/api.js';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      requestTypes: [],
      ticket_number: null,
      book_success: false,
      counters: []
    }

  }

  componentDidMount() {

    this.getRequestTypes();
    this.getCounters();
  }

  getCounters = () => {
    API.getCounters()
      .then((counters) => {
        this.setState({counters: counters});
        //todo: set the state for dynamic fill of the table

      })
      .catch((err) => {
        this.handleErrors(err);
      });

  }

  getRequestTypes = () => {

    API.getRequestTypes()
      .then((requestTypes) => {
        
       this.setState({requestTypes: requestTypes});

      })
      .catch((err) => {
        console.log(err);
        this.handleErrors(err);
      });

  }

  bookTicket = (ServiceTypeID) => {
    API.bookRequestType(ServiceTypeID)
    .then((id) => {
      console.log("l'id è: "+id);
      this.setState({ ticket_number: id, book_success: true }); 
      this.getRequestTypes();
    })
    .catch((err) => {
console.log(err);
    })
  }

  getExpectedWaitingTimes = () =>{
    API.getExpectedWaitingTimes()
      .then((requestTypes) => {
          
      })
      .catch((err) => {
        this.handleErrors(err); 
      }
      );
  }

  nextNumber = (idCounter) => {
    API.nextNumber(idCounter).then((nextNumber) => {
      this.setState({nextNumber: nextNumber});
    })
  }


  handleErrors(err) {
    if (err) {
      if (err.status && err.status === 401) {
        this.setState({ authErr: err.errorObj });

      }
    }
  }




  render() {


    return (
      <Container fluid>

        <Header />

        <Container fluid>

          <Switch>



            <Route path="/public">
              <Row className="vheight-100 ">
                <Col sm={3} className="below-nav" />
                <Col sm={6} className="below-nav">
                  
                  <Queues requestTypes = {this.state.requestTypes} bookTicket={this.bookTicket} book_success={this.state.book_success} ticket_number={this.state.ticket_number}>

                  </Queues>
                </Col>
                <Col sm={3} className="below-nav" />

              </Row>



            </Route>



            <Route path='/employee'>
              <Row className="vheight-100 ">
                <Col sm={3} className="below-nav" />
                <Col sm={6} className="below-nav">
                <Counters counters={this.state.counters} nextNumber = {this.nextNumber} number ={this.state.nextNumber}/>
                </Col>
                <Col sm={3} className="below-nav" />


              </Row>
            </Route>


            <Route>
              <Redirect to='/public' />
            </Route>


          </Switch>
        </Container>

      </Container>


    );
  }
}

export default withRouter(App);
