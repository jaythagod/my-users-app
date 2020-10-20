import React from 'react';
import Button from './Button';
import CardDetails from './CardDetails';
import './Card.css';


const Card = ({ id,name,uname,website }) =>{
    const firstLetter = name[0];
    return (
        <div className='tc br3 pa2 ma2 grow bw2 shadow-5 w-25 bg-white'>
            <div className="tc pa2 br-100 h3 w3 dib profileImage">{firstLetter}</div>
            <div>
                <CardDetails name={name} uname={uname} website={website} />
                <Button id={id} />
            </div>
        </div>
    );

}

export default Card;