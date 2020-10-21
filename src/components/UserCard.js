import React from 'react';
import UserDetailsList from './UserDetailsList';

const UserCard = ({ userInfo }) =>{
    return(
        <div className='tl dib br3 pa3 ma2 bw2 shadow-5 w-40 bg-white'>
            <UserDetailsList userInfo={userInfo}/>
        </div>
    );
}

export default UserCard;