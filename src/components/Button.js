import React from 'react';
import {Link} from 'react-router-dom';

const Button = ({id}) =>{
    return(
        <div>
            <Link to={`/UserDetails/${id}`}><p className='f6 link dim br3 ph3 pv2 mb2 dib white bg-dark-blue'>More Details</p></Link>
        </div>
    );
}

export default Button;