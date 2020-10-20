import React from 'react';

const ImagePlaceholder = ({ firstLetter }) =>{
    return(
        <div>
            <div className="tc pa2 br-100 h3 w3 dib profileImage">{firstLetter}</div>
        </div>
    );
}

export default ImagePlaceholder;