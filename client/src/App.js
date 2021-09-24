import logo from './logo.svg';
import './App.css';
import {letturaDati} from './controlli';
import React from 'react';

class App extends React.Component{
  constructor(props){

    super(props);
    this.state=null;
   
    

  }
render(){console.log("prova"); return (
<div className="container">
<div className="row">  
<div className="search"  style={{textAlign:"center"}}>
  <h1 >Codicedelvino.it</h1>
 <input type="Text" onChange={changeEvent=>{letturaDati(changeEvent).then(x=>this.setState( {risultato:x})) }}  className="form-control" placeholder="Cerca"  />
 <div>
 <table style={{"margin":"auto","color":"grey"}} className="table table-striped">
  
 <thead>
   <tr >
    <th>CIDCTZO</th>
    <th>CIDCDEN</th>
    <th>CIDCSOT</th>
    <th>CIDCVAR</th>
    <th>CIDCCOL</th>
    <th>CIDCMTR</th>
    <th>CIDCCAT</th>
    <th>CIDCINV</th>
    <th>CIDCTIP</th>
    <th>Codice vino</th>
    <th>Descrizione</th>
  </tr>
   </thead>
   {this.state != null  ?  this.state.risultato.map(x => {return (

<tbody>
  <tr>
    <td> {x.CIDCTZO}</td>
    <td> {x.CIDCDEN}</td>
    <td> {x.CIDCSOT}</td>
    <td> {x.CIDCVAR}</td>
    <td> {x.CIDCCOL}</td>
    <td> {x.CIDCMTR}</td>
    <td> {x.CIDCCAT}</td>
    <td> {x.CIDCINV}</td>
    <td> {x.CIDCTIP}</td>
    <td> {x.codicecompleto}</td>
    <td> {x.descrizione}</td>
    
  </tr>
  </tbody>

   ) }) : ''} 
   </table> </div>
 
  
</div></div>

</div>

)
}





}

export default App;
