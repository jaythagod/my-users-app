import React from 'react';
import './UserDetailsList.css';


const UserDetailsList = ({ userInfo }) =>{
    return (
        <div>
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
    );
}

export default UserDetailsList;