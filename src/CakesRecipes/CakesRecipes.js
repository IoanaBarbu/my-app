import React, { Component } from 'react';
import firebase from 'firebase/app'
import 'firebase/firestore'
import RecipeCard from './RecipeCard';

class CakesRecipes extends Component {
    state = {
        recipes: []
    };

    async componentDidMount() {
        var firebaseConfig = {
            apiKey: "AIzaSyCF7FGUNshaDF61kF0BXZiw7t2DhZXyHaE",
            authDomain: "myapp-812f3.firebaseapp.com",
            databaseURL: "https://myapp-812f3.firebaseio.com",
            projectId: "myapp-812f3",
            storageBucket: "myapp-812f3.appspot.com",
            messagingSenderId: "949140825444",
            appId: "1:949140825444:web:560e8cd9e8625db4ea0671",
            measurementId: "G-4E9FBBVC8S"
          };
    
        firebase.initializeApp(firebaseConfig);
        const db = firebase.firestore();
        const snapshot = await db.collection('CakesRecipes').get();

        this.setState({
            recipes: snapshot.docs.map(doc => doc.data())
        });                 
    }
   
    render() {  
        const mystyle = {
            color: "#b31d64",
            fontSize: "50px",
            padding: "30px",
            fontFamily: "Fantacy",
            textAlign: "center",
            fontStyle: "oblique",
          };

        return(
            <div>
                <h2 style={mystyle}>Cakes Recipes</h2>
                { this.state.recipes.map(recipe => <RecipeCard recipe={recipe} />) } 
            </div>
        );        
    }
}
            
export default CakesRecipes;