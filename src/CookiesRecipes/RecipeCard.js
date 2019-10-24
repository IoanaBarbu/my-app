import React from 'react';
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Image from 'react-bootstrap/Image'

function RecipeCard({recipe}) {
    const mystyleRecipes = {
        
        fontSize: "40px",
        padding: "10px",
        fontFamily: "Fantacy",
        textAlign: "center",
        fontStyle: "oblique",
    };

    return (
          <Card style={{backgroundColor:"#f3efef"}}  >
                <Card.Body>
                    <Card.Title  style={mystyleRecipes}> {recipe.Name} </Card.Title>
                    <CardGroup >
                        <Card>
                            <Card.Body>
                                <Image src= {recipe.img} fluid />
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Body>
                                <Card.Title>Ingredients</Card.Title>
                                <Card.Text>
                                    <ul>
                                        { recipe.Ingredients.map(ingredient => <li key={ ingredient }>{ ingredient } </li>) }
                                    </ul>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                         <Card>
                            <Card.Body>
                                <Card.Title>Method</Card.Title>
                                <Card.Text>
                                    <ol>
                                        { recipe.Method.map(method => <li  key={ method }>{ method } </li>) }
                                    </ol>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </Card.Body>
            </Card>
    );
}

export default RecipeCard;