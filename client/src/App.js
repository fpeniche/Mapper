import React,{Component} from "react";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import HomePage from './containers/HomePage';
import Fields from './containers/Fields';
import Login from './containers/LoginPage';
import Registration from "./containers/Registration";
import Title from "./components/Title";
import Nav from "./components/Nav";
import Jumbotron from "../src/components/Jumbotron";
import Jumbotron1 from "../src/components/Jumbotron1";
import { Col, Row, Container } from "../src/components/Grid";


class App extends Component {

  constructor(props)
  {
    super(props);
    this.state={
      session:null
    }
  }

signIn=(session)=>this.setState({session});

  render() {
    return <Container fluid>
      <Nav />
      <Row>
      <Col size="md-6">
        <Jumbotron1 />
        <Router>
      <Switch>
        <Route path="/fields/:application" component={Fields} />
        {!this.state.session&&<Route path="/login" component={()=><Login onLogin={this.signIn} /> } />}
        {!this.state.session&&<Route path="/register" component={()=><Registration onRegister={this.signIn} /> } />}
        <Route component={()=><HomePage session={this.state.session} /> } />
      </Switch>
      <Switch>

      </Switch>
      </Router>
      </Col>
      <Col size="md-6">
        <Jumbotron />
        </Col>
      </Row>
      
    
    </Container>
  }
}
export default App;
