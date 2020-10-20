import React, { useState, useEffect } from 'react';
import {Link, useParams} from 'react-router-dom';
import './App.css';
import './UserDetails.css';


const UserDetails = () =>{

        const {id} = useParams();
        const [userInfo, setUserInfo] = useState({company:{}, address:{}});

        useEffect(() =>{
            const fetchUser = async () =>{
                const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
                const resJson = await response.json();
                setUserInfo(resJson);
            }

            fetchUser();
        }, [id]);

        
        return(
            
            <div>
                <Link to="/">Home</Link>
                <h1>User Details</h1>
                <div className='tl dib br3 pa3 ma2 bw2 shadow-5 w-25'>
                    <ul className="dashed">
                        <li>name: {userInfo.name}</li>
                        <li>username: {userInfo.username}</li>
                        <li>email: {userInfo.email}</li>
                        <li>phone: {userInfo.phone}</li>
                        <li>company: {userInfo.company.name}</li>
                        <li>website: {userInfo.website}</li>
                        <li>address:<br/>
                            <ul className="dashed">
                                <li>street: {userInfo.address.street}</li>
                                <li>suite: {userInfo.address.suite}</li>
                                <li>city: {userInfo.address.city}</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        );    
}

export default UserDetails ;