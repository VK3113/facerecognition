import React from 'react';
import { placeholder } from '@babel/types';


const LinkBox = ({onInputChange, onButtonClick}) => {
    return (
        <div style = {{border: 'solid', borderColor:'grey', borderWidth:'0.5px', width:'1000px', margin:'auto' }}>
            <h3>Enter a link for an image and see the face recognized</h3>
            <input type = 'text' maxLength = '200' placeholder = 'Paste a link of an image with face' autoFocus={true} 
            onChange = {onInputChange}    style = {{width:'600px', margin:'10px'}}></input>
            <button onClick = {onButtonClick} style = {{cursor:'pointer'}}>Detect face</button>
        </div>
    )
}

export default LinkBox;