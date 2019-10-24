import React from 'react'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Image from 'react-bootstrap/Image'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'
import Axios from 'axios';
import SessionContext from './session.context';

class Login extends React.Component {
  static contextType = SessionContext;
  
  state = {
    username: '',
    password: '',
    loginError: ''
  };
  handleInput = (e) => {
    const newState = {};
    newState[e.currentTarget.id] = e.currentTarget.value;

    this.setState(newState);

    this.setState({
      loginError: ''
      

    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const res = await Axios(`http://localhost:3002/users?username=${this.state.username}&password=${this.state.password}`);
    console.log(res);
    
    if(res.data.length === 1) {
      //user logged in successfully
      this.context.setUser(res.data[0]);
      
      
    } else {
      // error logging in
      this.setState({
        loginError: 'Username or password are not valid.'
      })
    }
    
  }
 
  render() {  
    const mystyle = {
      fontSize: "50px",
      padding: "30px",
      fontFamily: "Fantacy",
      textAlign: "center",
      fontStyle: "oblique",
    };

    const mystyle2 = {
      fontSize: "40px",
      padding: "10px",
      fontFamily: "Fantacy",
      textAlign: "center",
      fontStyle: "oblique",
    };

    return(
      <>
        <h2 style={mystyle}>Sign in</h2>
          <p style={ { 'fontWeight': 'bold', color: '#cc0000'} }>
            { this.state.loginError }
          </p>
        <Card style={{backgroundColor:"#eeb32c"}}  >
          <Card.Body>
            <CardGroup >
              <Card>
                <Card.Body>
                <Image src= "img/loginImg.jpg" fluid />
                </Card.Body>
              </Card>

              <Card style={{backgroundColor:"#f3efef"}}>
                  <Card.Body>
                    <Form onSubmit={this.handleSubmit} >
                      <Form.Group>
                        <Form.Label style={mystyle2}>User name</Form.Label>
                        <Form.Control id="username" type="text" onChange={ this.handleInput } value={ this.state.username } placeholder="Enter username"  />
                      </Form.Group>

                      <Form.Group>
                        <Form.Label style={mystyle2}>Password</Form.Label>
                        <Form.Control id="password" type="password" onChange={ this.handleInput } value={ this.state.password } placeholder="Password" />
                      </Form.Group>
                      
                      <Button size="lg" style={{margin:"10px",backgroundColor:"#eeb32c"}} type="submit">
                        Log In
                      </Button>
                      <h2 style={{fontFamily: "Fantacy",fontStyle: "oblique"}}>No account? <Link to="/signup">Create one!</Link></h2>
                    </Form>
                  </Card.Body>
              </Card>   
            </CardGroup>  
          </Card.Body>
        </Card>
      </>
    );        
  }
}
          
export default Login;