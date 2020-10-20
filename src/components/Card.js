import React from 'react';
import Button from './Button';
import CardDetails from './CardDetails';
import ImagePlaceholder from './ImagePlaceholder';
import './Card.css';


const Card = ({ id,name,uname,website }) =>{
    return (
        <div className='tc br3 pa2 ma2 grow bw2 shadow-5 w-25 bg-white'>
            <ImagePlaceholder firstLetter={name[0]}/>
            <div>
                <CardDetails name={name} uname={uname} website={website} />
                <Button id={id} />
            </div>
        </div>
    );

}

export default Card;