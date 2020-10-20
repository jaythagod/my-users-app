import React, { Component } from 'react';
import CardList from '../components/CardList';
import UserDetails from './UserDetails';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';


class App extends Component{
  constructor(){
      super();
      this.state = {
          allusers: []
      }
  }

  componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response =>{
          return response.json();
      })
      .then(users =>{
          this.setState({allusers: users});
      });
  }


  render(){
    const myUsers = this.state.allusers;

    return (
      <Router>
        <div className="tc">
          <Switch>
            <Route path="/" exact render={(props)=>(<CardList userinfo={ myUsers }/>)}/>
            <Route path="/UserDetails/:id" render={()=> <UserDetails/>} />
          </Switch>
        </div>
      </Router>
    );
  } 
}

export default App;
