import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'



class HomePage extends Component {
    render() 
        {
             const mystyle =
            {
              color: "#b31d64",
              fontSize: "50px",
              padding: "30px",
              fontFamily: "Fantacy",
              textAlign: "center",
              fontStyle: "oblique",
            };
            
        
        return(
              <div style={{backgroundColor:"#f3efef"}}>
                <p style ={mystyle}> Life is short and it is up to you to make it sweet </p>        
  
                <CardDeck >
                  <Card>
                    <Card.Img variant="top" src="img/cakeHomepage.jpg" />
                    <Card.Body>
                      <Card.Title>Cakes</Card.Title>
                      <Card.Text>
                          Cakes are special. Every birthday, every celebration ends with something sweet, a cake, and people remember. It's all about the memories.
                      </Card.Text>
                    </Card.Body>
                    </Card>
                    <Card>
                      <Card.Img variant="top" src="img/cupcakesHomepage.jpg" />
                      <Card.Body>
                        <Card.Title>Cupcakes</Card.Title>
                        <Card.Text>
                          A balanced diet is having a cupcake in each hand.
                          When stressed and in doubt, cupcake it out.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                    <Card>
                      <Card.Img variant="top" src="img/cookieHomepage.jpg" />
                      <Card.Body>
                        <Card.Title>Cookies</Card.Title>
                        <Card.Text>
                          Baking cookies is comforting, and cookies are the sweetest little bit of comfort food. They are very bite-sized and personal.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </CardDeck>
        <br />
                  <Card bg="dark" style={{color: "#d39ab2", textAlign: "center"}}>
                    <Card.Body>
                      <Card.Text>
                        Copyright © Sweety App 2019
                    </Card.Text>
                    </Card.Body>
                    </Card>
              </div>
        );

    }
}


export default HomePage;