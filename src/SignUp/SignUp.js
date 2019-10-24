import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

class SignUp extends Component {
  state = {
    id:'',
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password:'',
  };

  handleInput = (e) => {
    this.setState({
      [e.currentTarget.id]: e.currentTarget.value
    })
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios({
      method: 'post',
      url: 'http://localhost:3002/users',
      data: {
        id: Math.random(),
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
      }
    });
    
  };
 
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
          <h2 style={mystyle}>Sign up</h2>
            <Card style={{backgroundColor:"#b31d64"}}  >
              <Card.Body>   
                <CardGroup >
                  <Card>
                    <Card.Body>
                      <Image src= "img/SignUpImg.jpg" fluid />
                    </Card.Body>
                  </Card>
                  <Card style={{backgroundColor:"#f3efef"}}>
                    <Card.Body>
                      <Form onSubmit={ this.handleSubmit }>
                        <Form.Group>
                          <Form.Label style={mystyle2}>First Name</Form.Label>
                          <Form.Control id="firstname" value={this.state.firstname} onChange={ this.handleInput } type="text" placeholder="First Name" />
                        </Form.Group>
                        <Form.Group>
                          <Form.Label style={mystyle2}>Last Name</Form.Label>
                          <Form.Control id="lastname" value={this.state.lastname} onChange={ this.handleInput } type="text" placeholder="Last Name" />
                        </Form.Group>
                        <Form.Group>
                          <Form.Label style={mystyle2}>User Name</Form.Label>
                          <Form.Control id="username" value={this.state.username} onChange={ this.handleInput } type="text" placeholder="User Name" />
                        </Form.Group>
                        <Form.Group>
                          <Form.Label style={mystyle2}>Email address</Form.Label>
                          <Form.Control id="email" value={this.state.email} onChange={ this.handleInput } type="email" placeholder="Enter email"  />
                            <Form.Text className="text-muted">
                              We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group>
                          <Form.Label style={mystyle2}>Password</Form.Label>
                          <Form.Control id="password" value={this.state.password} onChange={ this.handleInput } type="password" placeholder="Password" />
                        </Form.Group>
                          <Button size="lg" style={{margin:"10px",backgroundColor:"#b31d64"}} type="submit">
                            Sign up
                          </Button>
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
          
export default SignUp;