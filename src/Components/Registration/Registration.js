import React from 'react';
import Styles from './Registration.module.css';
import Register from './registration.png';

class Registration extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            regId    : '',
            regUname : '',
            regEmail : '',
            regPassword: ''
        }
    }

    onIdChange = (event) => {
        this.setState({regId : event.target.value});
    }

    onUnameChange = (event) => {
        this.setState({regUname : event.target.value});
    }

    onEmailChange = (event) => {
        this.setState({regEmail : event.target.value});
    }

    onPasswordChange = (event) => {
        this.setState({regPassword : event.target.value});
    }

    onSubmitReg = () => {
        fetch('http://localhost:3000/register', {
            method          : 'post',
            headers         : {'Content-Type' : 'application/json'},
            body : JSON.stringify({
                id          : this.state.regId,
                name        : this.state.regUname,
                email       : this.state.regEmail,
                password    : this.state.regPassword
            })
        })
        // console.log(JSON.stringify({
        //     email           : this.state.signInEmail,
        //     password        : this.state.signInPassword
        // }))
        .then(response => response.json())
        .then(data => {
            if (data === 'registered') {
            this.props.onRouteChange('home');
            }
        })
     
    }
    render () {

        const { onRouteChange } = this.props;

    return (

        // <!--Registration form will have one main div cointatiner with one div for error messages, form with divs for each input field and a submit button outside the form-->
        <div className = {Styles.divContainer}>
            <div >
                <img src= {Register} className = {Styles.registerImg}/>
            </div>
            <div className = {Styles.divfields}>
                    <div >
                        <h1>Sign-up to get a free account</h1>
                        
                            <span> Already have an account?</span>
                            <p className = {Styles.pclass} onClick = {() => onRouteChange('signin')} > Sign In </p>
                        
                    </div>
                    <fieldset className = {Styles.fieldset}>
                    <div className = {Styles.divall}>
                        <label  htmlFor="firstname" >First and Last name</label>
                        <input 
                        className = {Styles.inputcls} 
                        type="text" 
                        name="firstname"  
                        autoFocus={true} 
                        placeholder="Enter First and Last name"
                        
                        ></input>
                    </div>
                    {/* <!--<div >
                        <label htmlFor="lastname" >Lastname</label>
                        <input type="text" name="lastname"  ></input>
                    </div>--> */}
                    <div className = {Styles.divall}>
                        <label  htmlFor="Address" >Address</label>
                        <input 
                        className = {Styles.inputcls} 
                        type="text" 
                        name="Address"  
                        placeholder="Enter Street, City, Zip Code" 
                       
                        ></input>
                    </div>
                    {/* <!--<div class="rgtrn-txt-div">
                        <label for="zipcode" class="label-style">ZIP Code</label>
                        <input type="text" name="zipcode" class ="input-text-style" ></input>
                    </div>--> */}
                    <div className = {Styles.divall} >
                        <label  htmlFor="Country" >Country</label>
                        <select  className = {Styles.inputcls} name="country">
                            <option value="United States">United States</option>
                            <option value="Australia">Australia</option>
                            <option value="United Kingdom">United Kingdom</option>
                            <option value="India">India</option>
                            <option value="NewZealand">NewZealand</option>
                        </select>
                    </div>
                    <div className = {Styles.divall}>
                        <label  htmlFor="bday" >Birthday</label>
                        <input className = {Styles.inputcls} type="date" name="bday"  ></input>
                    </div>
                    <div  className = {Styles.divall}>
                        <label   htmlFor="Gender" >Gender</label>
                    </div>
                    <div className = {Styles.divchoice}>
                       
                        <input className = {Styles.inputchoice} type="radio" name="gender" value="male" />Male
                        <input className = {Styles.inputchoice} type="radio" name="gender" value="Female" />Female
                        <input className = {Styles.inputchoice} type="radio" name="gender" value="Other" />Other
                    </div>
                    <div  className = {Styles.divall}>
                        <label   htmlFor="interests" >Interests</label>
                    </div>
                    <div  className = {Styles.divchoice}>
                        <input className = {Styles.inputchoice} type="checkbox" name="gender" value="sports" />Sports
                        <input className = {Styles.inputchoice} type="checkbox" name="politics" value="politics" />politics
                        <input className = {Styles.inputchoice} type="checkbox" name="movies" value="movies" />Movies
                    </div>
                    
                    <div className = {Styles.divall}>
                        <label  htmlFor="Id" >User Id</label>
                        <input 
                        className = {Styles.inputcls} 
                        type="text" 
                        name="Id"  
                        placeholder="Enter User Id" 
                        onChange = {this.onIdChange}
                        ></input>
                    </div>
                    <div className = {Styles.divall}> 
                        <label htmlFor="username" >Username</label>
                        <input 
                        className = {Styles.inputcls} 
                        type="text" name="username"  
                        placeholder="Choose a username win min.5 characters and max.9 characters" 
                        onChange = {this.onUnameChange}
                        ></input>
                    </div>
                    <div className = {Styles.divall}>
                        <label  htmlFor="email" >Email Id</label>
                        <input 
                        className = {Styles.inputcls} 
                        type="email" 
                        name="email" 
                        placeholder="Enter valid email id" 
                        onChange = {this.onEmailChange}
                        ></input>
                    </div>
                    <div className = {Styles.divall}>
                        <label  htmlFor="password" >Password</label>
                        <input 
                        className = {Styles.inputcls} 
                        type="password" 
                        name="password"  
                        placeholder="Enter password. Password requirements provided below" 
                        onChange = {this.onPasswordChange}
                        ></input>
                        
                    </div>
                    <div className = {Styles.psswdReq1}>
                        <ul >
                            <li className = {Styles.psswdReqList} >One lower case character</li>
                            <li className = {Styles.psswdReqList} >One upper case character</li>
                            <li className = {Styles.psswdReqList} >One number</li>
                            <li className = {Styles.psswdReqList} >One special character</li>
                            <li className = {Styles.psswdReqList} >8 characters minimum</li>
                        </ul>
                    </div>
                    
                    <div className = {Styles.divbutton}>
                        <input  onClick = {this.onSubmitReg} type="submit" value="Register" ></input>
                    </div>
                    
                    </fieldset>
            </div>
            
        </div>
    
    )
}




}

export default Registration;