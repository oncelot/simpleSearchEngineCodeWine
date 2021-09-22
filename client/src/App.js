import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component{
  constructor(props){

    super(props);
    this.state={testoprova:"prova"};
    this.handleClick = this.handleClick.bind(this);
    this.letturaDati = this.letturaDati.bind(this);

  }
render(){return (
  <div className="search">
 
  <input type="button" value="prova" onClick={this.handleClick} />
  {this.state.testoprova}
</div>)
}

handleClick() {
  this.setState({testoprova:this.state.testoprova+" prova modificate"}, () => { this.letturaDati()} );
  console.log('Il valore di `this` è: ', this);
  
}

letturaDati(){
  fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => {
    this.setState({testoprova:this.state.testoprova + json.title});
  });
  

}


}

export default App;
