import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import UserCard from '../components/UserCard';
import Header from '../components/Header';
import './App.css';


const UserDetails = () =>{
        const pageName = "User Details";
        const {id} = useParams();
        const [userInfo, setUserInfo] = useState({company:{}, address:{}});

        useEffect(() =>{
            const fetchUser = async () =>{
                try{
                    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
                    const resJson = await response.json();
                    setUserInfo(resJson);
                }catch(err){
                    setUserInfo({apiError:"Ooops, Something went wrong!!", company:{}, address:{}});
                    console.log("Debug Error: ", err);
                }
            }

            fetchUser();
        }, [id]);

        
        return(
            
            <div>
                <Header pagename={pageName}/>
                <UserCard userInfo={userInfo}/>
            </div>
        );    
}

export default UserDetails ;