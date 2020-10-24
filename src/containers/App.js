import React,  { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import UserDetails from './UserDetails';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';


const App = ()=>{
  const [allUsers, loadAllUsers] = useState([]);

  useEffect(() =>{
    const fetchAllUsers = async () =>{
        try{
          const response = await fetch('https://jsonplaceholder.typicode.com/users');
          const resJson = await response.json();
          loadAllUsers(resJson);
        }catch(err){
          console.log("Api call failed: ",err);
        }
    }

    fetchAllUsers();
    },[]);

    return (
      <Router>
      <div className="tl fl w-20 pa2"></div>
        <div className="tc fl w-60 pa2">
          <Switch>
            <Route path="/" exact render={(props)=>(<CardList userinfo={ allUsers }/>)}/>
            <Route path="/UserDetails/:id" render={()=> <UserDetails/>} />
          </Switch>
        </div>
        <div className="tr fl w-20 pa2"></div>
      </Router>
    );
  
}

export default App;
