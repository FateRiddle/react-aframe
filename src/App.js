import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import reactconf_00 from './images/reactconf_00.jpg'
import reactconf_01 from './images/reactconf_01.jpg'
import reactconf_02 from './images/reactconf_02.jpg'
import reactconf_03 from './images/reactconf_03.jpg'
import chessgame from './images/chess-world.jpg'
import matong from './images/2.png'
import background from './images/1.png'
import mergeImages from 'merge-images'

const srcNames = [chessgame,reactconf_00,reactconf_01,reactconf_02,reactconf_03]

class App extends Component {

  state = {index: 1, zoom: 1, src: background}

  handleClick = () => {
    // this.setState({index:(this.state.index+1)%5})
    if(this.state.src === background){
      mergeImages([background, matong])
      .then(b64 => {
        this.setState({src:b64})
      })
    } else {
      this.setState({src: background})
    }

  }

  zoomIn = () => {
    if(this.state.zoom < 4){
      this.setState({zoom: this.state.zoom + 0.6})
    }
  }

  zoomOut = () => {
    if(this.state.zoom > 1){
      this.setState({zoom:this.state.zoom - 0.6})
    }
  }

  render() {
    return (
      <div className="App">
        <a-scene embedded>
          <a-entity camera={`zoom: ${this.state.zoom}`} look-controls></a-entity>
          <a-box color="red" position="0 2 -9" rotation="0 45 45" scale=".6 .6 .6"></a-box>
          {/* <a-entity geometry="primitive: sphere;radius: 4000" material={`side: back; src: url(${background}); repeat:-1 1`} ></a-entity> */}
          <a-sky src={this.state.src}></a-sky>
        </a-scene>
        <div className="buttons">
          <button onClick={this.zoomOut}>-</button>
          <button onClick={this.handleClick}>click me</button>
          <button onClick={this.zoomIn}>+</button>
        </div>
      </div>
    );
  }
}

export default App;
