import React from 'react';
import Brain from './Logo.png';
import './Logo.css';

const Logo = () => {
    return (
        <div style ={{display :'flex', justifyContent:'flex-start', alignItems:'center', height:'80px', width: '80px',margin:'50px', marginTop: '0px'}}>
            <img src={Brain}></img>
        </div>
    )
}
export default Logo;