
import React, {useState} from 'react';
import 'firebase/firestore'
import "firebase/auth";
import CakesRecipes from './CakesRecipes/CakesRecipes';
import CupcakesRecipes from './CupcakesRecipes/CupcakesRecipes';
import CookiesRecipes from './CookiesRecipes/CookiesRecipes';
import HomePage from './HomePage/HomePage';
import MyToDoList from './MyToDoList/MyToDoList';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavigationBar from './NavigationBar/NavigationBar';
import { Login, SessionContext } from './Login';
import SignUp from './SignUp/SignUp';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const existingLogin = JSON.parse(localStorage.getItem('cevadulceapp-user')) || {};
  const [user, setUser] = useState(existingLogin);

  const saveUser = (user) => {
      setUser(user);

      localStorage.setItem('cevadulceapp-user', JSON.stringify(user));
  }
  
  return (
    <Router>
    <SessionContext.Provider value={ {user, setUser: saveUser} }>
      <NavigationBar />
      
      <Route exact path="/" component={ HomePage } />
      <Route path="/login" component={ Login } />
      <Route path="/cakesrecipes" component={ CakesRecipes } />
      <Route path="/cupcakesrecipes" component={ CupcakesRecipes } />
      <Route path="/cookiesrecipes" component={ CookiesRecipes } />
      <Route path="/mytodolist" component={ MyToDoList } />
      <Route path="/signup" component={ SignUp } />
      
      </SessionContext.Provider>
    </Router>
  )
}

export default App;