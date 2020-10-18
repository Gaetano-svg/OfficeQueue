import React from "react";
import "./App.css";
import Header from "./components/Header";
import Queues from "./components/Queues"
import Counters from "./components/Counters"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Redirect, Route, Link } from 'react-router-dom';
import { Switch } from 'react-router';
import { withRouter } from 'react-router-dom';


class App extends React.Component {

  constructor(props) {
    super(props);
  
  }

  componentDidMount() {

  
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

        <Header  />

        <Container fluid>

          <Switch>

              

          <Route path="/public">
                <Row className="vheight-100 ">           
                <Col sm={3} className="below-nav"/> 
                <Col sm={6} className="below-nav">
                        <Queues> 

                        </Queues>
                         </Col> 
                         <Col sm={3} className="below-nav"/>
                          
                  </Row> 



          </Route>



                <Route path='/employee'>
                  <Row className="vheight-100 ">           
                  <Col sm={3} className="below-nav"/> 
                     <Col sm={6} className="below-nav">
                        <Counters> 

                        </Counters>
                         </Col> 
                  <Col sm={3} className="below-nav"/>
                          
                    
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
