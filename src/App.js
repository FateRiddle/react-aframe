import React, { Component } from 'react';
import './App.css';
import chessgame from './images/chess-world.jpg'
import matong from './images/2.png'
import background from './images/1.png'
import mergeImages from 'merge-images'

class App extends Component {

  state = {src: background}

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
