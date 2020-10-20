import React from 'react';
import {Link} from 'react-router-dom';

const CardDetails = ({name, uname, website}) =>{

    return(
        <div>
            <h4>{name}</h4>
            <p>{`@`+uname}</p>
            <Link to={`http://`+website}><p>{`http://`+website}</p></Link>
        </div>
    );

}

export default CardDetails;