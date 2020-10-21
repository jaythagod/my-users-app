import React from 'react';
import {Link} from 'react-router-dom';

const Header = ({ pagename }) =>{
    return(
        <div>
            <Link to="/">Home</Link>
            <h1>{pagename}</h1>
        </div>
    );
}

export default Header;