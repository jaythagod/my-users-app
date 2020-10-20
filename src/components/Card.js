import React from 'react';
import {Link} from 'react-router-dom';
import Button from './Button';
import './Card.css';


const Card = ({ id,name,uname,website }) =>{
    const firstLetter = name[0];
    return (
        <div className='tc dib br3 pa2 ma2 grow bw2 shadow-5 w-25 bg-white'>
            <div className="br-100 h3 w3 dib profileImage">{firstLetter}</div>
            <div>
                <h4>{name}</h4>
                <p>{`@`+uname}</p>
                <Link to={`http://`+website}><p>{`http://`+website}</p></Link>
                <Button id={id} />
            </div>
        </div>
    );

}

export default Card;