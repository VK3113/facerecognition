import React, { Component } from 'react';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import LinkBox from './Components/LinkBox/LinkBox';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition';
import Signin from './Components/Signin/Signin';
import Registration from './Components/Registration/Registration';
import logo from './logo.svg';
import './App.css';
import Clarifai from 'clarifai';


const app = new Clarifai.App({
  apiKey: '866e683ea5d34ae6a1221a545f0474a8'
});


class App extends Component {

  constructor () {
    super();
    this.state = {
      input: ' ',
    imageUrl: ' ',
    boxes :[],
    route: 'signin',
      isSignedIn: false,
      user: {
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: ''}
    }
  }

    calculateFaceLocation = (data) => {

      // const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
      
      const image = document.getElementById('inputimage');
      const width = Number(image.width);
      const height = Number(image.height);
      return data.outputs[0].data.regions.map(face => {
        const clarifaiFace = face.region_info.bounding_box;
      return {
  
        leftCol: clarifaiFace.left_col * width,
        topRow: clarifaiFace.top_row * height,
        rightCol: width - (clarifaiFace.right_col * width),
        bottomRow: height - (clarifaiFace.bottom_row * height)
       }
      });
    }
  
  
  
    displayFaceBox = (boxes) => {
  
      this.setState({boxes: boxes});
  
    }


onInputChange = (event) => {
  this.setState({input: event.target.value});
}

onButtonClick = () => {
  this.setState({imageUrl: this.state.input});
    app.models
      .predict(
        Clarifai.FACE_DETECT_MODEL,
        this.state.input)
        .then(response => {
        
        
        // if (response) {
        //   fetch('http://localhost:3000/image', {
        //     method: 'put',
        //     headers: {'Content-Type': 'application/json'},
        //     body: JSON.stringify({
        //       id: this.state.user.id
        //     })
        //   })
        //     .then(response => response.json())
        //     .then(count => {
        //       this.setState(Object.assign(this.state.user, { entries: count}))
        //     })
        // }
        this.displayFaceBox(this.calculateFaceLocation(response))
      })
      .catch(err => console.log(err));
}

onRouteChange = (route) => {
  this.setState({route:route});
  
}

render(){
  return (
    <div className="App">
      
     
      {this.state.route === 'home' 
      ?
          <div>
            <Navigation onRouteChange = {this.onRouteChange}/>
            <Logo />
            <LinkBox onInputChange={this.onInputChange} onButtonClick={this.onButtonClick}/>
            <FaceRecognition imageUrl={this.state.imageUrl} boxes = {this.state.boxes} />
          </div>
      :
          ( 
            this.state.route === 'signin'
          ? <Signin onRouteChange = {this.onRouteChange}/>
          : <Registration onRouteChange = {this.onRouteChange}/>
          )
      }
    </div>
      
  );
}
}

export default App;
