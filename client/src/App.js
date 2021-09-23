import logo from './logo.svg';
import './App.css';
import {letturaDati} from './controlli';
import React from 'react';

class App extends React.Component{
  constructor(props){

    super(props);
    this.state=null;
   
    

  }
render(){return (
  <div className="search">
 <input type="Text" onChange={changeEvent=>{letturaDati(changeEvent).then(x=>this.setState( {risultato:x})) }}  />
 <div>{this.state != null  ?  this.state.risultato.map(x => {return (<div>{x.codicecompleto} </div>) }) : ''} </div>
 
  
</div>)
}





}

export default App;
