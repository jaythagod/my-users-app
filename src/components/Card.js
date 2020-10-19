import React from 'react';
import './Card.css';


const Card = ({ id,name,uname,website }) =>{
    const firstLetter = name[0];
    return (
        <div className='tc dib br3 pa3 ma2 grow bw2 shadow-5 w-25 bg-light-gray'>
            <div className="br-100 h3 w3 dib profileImage">{firstLetter}</div>
            <div>
                <h2>{name}</h2>
                <p>{`@`+uname}</p>
                <p><a href={website}>{`http://`+website}</a></p>
                <p><a className='f6 link dim br3 ph3 pv2 mb2 dib white bg-dark-blue' href={website}>More Details</a></p>
            </div>
        </div>
    );

}

export default Card;