import React from 'react';

const CardDetails = ({name, uname, website}) =>{

    return(
        <div>
            <h4>{name}</h4>
            <p>{`@`+uname}</p>
            <a href={`http://`+website} target="_blank" rel="noreferrer noopener"><p>{`http://`+website}</p></a>
        </div>
    );

}

export default CardDetails;