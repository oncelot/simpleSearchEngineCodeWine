import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component{
  constructor(props){

    super(props);
    this.state={testoprova:"prova"}
  }
render(){return (
  <div className="search">
 
  <input type="button" value="prova" onClick={() => this.handleClick()} />
  {this.state.testoprova}
</div>)
}
handleClick() {
  this.setState({testoprova:"prova modificate"});
  console.log('Il valore di `this` è: ', this);
}


}

export default App;
