import React from 'react';


/* There is no requirement to maintain state in this component. Just going to be a "sign-out" link */
/* So we will use a function and not a class */

const Navigation = ({onRouteChange}) => {
    return  (
  
        <nav style ={{display :'flex' , justifyContent:'flex-end' }}>
            <p onClick = {() => onRouteChange('signin')} className = 'f3 link dim black underline pa3 pointer'> Sign-out</p>
        </nav>
        
    );
}

export default Navigation;