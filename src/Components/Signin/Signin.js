import React, { Component} from 'react';
import Brain from '../Logo/Logo.png';
import Styles from './Signin.module.css';
import { thistle } from 'color-name';


class Signin extends Component  {
    constructor(props) {
        super(props);
        this.state = {
            signInEmail : '',
            signInPassword : ''
        }
    }
    
    onemailChange = (event) => {
        this.setState({signInEmail : event.target.value})
    }
    
    onpasswordChange = (event) => {
        this.setState({signInPassword : event.target.value})
    }

    onsubmitSignIn = () => {
        fetch('http://localhost:3000/signin', {
            method          : 'post',
            headers         : {'Content-Type' : 'application/json'},
            body : JSON.stringify({
                email       : this.state.signInEmail,
                password    : this.state.signInPassword
            })
        })
        // console.log(JSON.stringify({
        //     email           : this.state.signInEmail,
        //     password        : this.state.signInPassword
        // }))
        .then(response => response.json())
        .then(data => {
            if (data === 'success') {
            this.props.onRouteChange('home');
            }
        })
       
    }


    render () {
        const { onRouteChange } = this.props;
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
                        <input 
                        type="text" 
                        name="usrname" 
                        id="usrname" 
                        autoFocus={true}  
                        placeholder ="Enter your username" 
                        className = {Styles.inputcls}
                        onChange = {this.onemailChange}
                        ></input>
                    </div>
                    <div  className = {Styles.divFields}>
                        <label   className = {Styles.labelcls} >Password</label>
                        <input 
                        type="password" 
                        name="psswd" 
                        id="psswd"  
                        placeholder="Enter password" 
                        className = {Styles.inputcls}
                        onChange = {this.onpasswordChange}
                        ></input>
                    </div>
                    <div className = {Styles.divFields} >
                        <input onClick = {this.onsubmitSignIn} type="submit" value="Sign In" className = {Styles.buttoncls} ></input>
                    </div>
                </div>
            </fieldset>
             </div>
        </div>
        )
    }
}
export default Signin;