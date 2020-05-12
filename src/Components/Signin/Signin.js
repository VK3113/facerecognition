import React from 'react';
import Brain from '../Logo/Logo.png';

import Styles from './Signin.module.css';


const Signin = ({ onRouteChange }) => {
    return(
        <div className = {Styles.divContainer}> {/* Container that has one div for logo and one form */}

            {/* Div for logo 'divlogo'     */}
            <div >
                <img src = {Brain} alt = '' className = {Styles.logoImg}></img>
            </div>

            {/* form will contain div header with "Sign-In" text and prompt to register, Fieldset for email and passwdd */}
            <div>
            <div >
                <h1 >Log In</h1>
               
                    <span >Need an account?</span>
                    <p className = {Styles.pclass} onClick ={() => onRouteChange('Registration')} > Register</p>
                
            </div>
            <fieldset className = {Styles.fieldset}>
                <div>
                    <div className = {Styles.divFields} >
                        <label  className = {Styles.labelcls}>Username</label>
                        <input type="text" name="usrname" id="usrname" autoFocus={true}  placeholder ="Enter your username" className = {Styles.inputcls}></input>
                    </div>
                    <div  className = {Styles.divFields}>
                        <label   className = {Styles.labelcls} >Password</label>
                        <input type="password" name="psswd" id="psswd"  placeholder="Enter password" className = {Styles.inputcls}></input>
                    </div>
                    <div className = {Styles.divFields} >
                        <input onClick = {() => onRouteChange('home')} type="submit" value="Sign In" className = {Styles.buttoncls} ></input>
                    </div>
                </div>
            </fieldset>
           
             </div>

         
        </div>
        
    )
}

export default Signin;