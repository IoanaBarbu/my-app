import React, { Component } from 'react';
import 'firebase/firestore'
import firebase from 'firebase/app'
import RecipeCard from './RecipeCard';

class CookiesRecipes extends Component {
    state = {
        recipes: []
    };

        async componentDidMount() {
            const db = firebase.firestore();
            const snapshot = await db.collection('Recipes').get();
        this.setState({
            recipes: snapshot.docs.map(doc => doc.data())
        });                 
    }
   
    render() {  
        const mystyle = {
            color: "#eeb32c",
            fontSize: "50px",
            padding: "30px",
            fontFamily: "Fantacy",
            textAlign: "center",
            fontStyle: "oblique",
          };

        return(
            <div>
                <h2 style={mystyle}>Cookies Recipes</h2>
                { this.state.recipes.map(recipe => <RecipeCard recipe={recipe} />) } 
            </div>
        );        
    }
}
            
export default CookiesRecipes;