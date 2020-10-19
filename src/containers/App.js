import React, { Component } from 'react';
import CardList from '../components/CardList';
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
      <div className="tc">
        <CardList userinfo={ myUsers }/>
      </div>
    );
  } 
}

export default App;
