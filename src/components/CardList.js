import React from 'react';
import Card from './Card';

const CardList = ({userinfo}) =>{

    const cardComponent = userinfo.map((user, i) => {
        return (
            <Card key={i} 
            id={ userinfo[i].id } 
            name={ userinfo[i].name } 
            uname={ userinfo[i].username } 
            website={ userinfo[i].website }/>);
    });

    return (
        <div className='flex flex-wrap justify-around'>
            { cardComponent }
        </div>
    );
}

export default CardList;