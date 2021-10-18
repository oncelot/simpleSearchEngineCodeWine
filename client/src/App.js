import logo from './logo.svg';
import './App.css';
import {letturaDati} from './controlli';
import React from 'react';

class App extends React.Component{
  constructor(props){

    super(props);
    this.state={risultato:null, regioni:'',filtro:''};
   
    

  }
render(){console.log("prova"); return (
<div className="container">
<div className="row">  
<div className="search"  style={{textAlign:"center"}}>
  <h1 >Codicedelvino.it</h1>
  {this.state.regioni}
 <input type="Text" onChange={changeEvent=>{
   this.setState({filtro:changeEvent.target.value},
    ()=>{letturaDati(this.state).then(x=>{this.setState({risultato:x}) })}) }  }
      className="form-control" placeholder="Cerca per codice vino/tipologia"  />
 <select id="inputRegioni" onChange={changeEvent=>{this.setState({regioni:changeEvent.target.value},()=>{letturaDati(this.state).then(x=>{this.setState({risultato:x})})
})} }>
 <option value="">Seleziona...</option>
  <option value="ABRUZZO">ABRUZZO</option>
  <option value="BASILICATA">BASILICATA</option>
  <option value="BOLZANO">BOLZANO</option>
  <option value="CALABRIA">CALABRIA</option>
  <option value="CAMPANIA">CAMPANIA</option>
  <option value="EMILIA ROMAGNA">EMILIA ROMAGNA</option>
  <option value="FRIULI VENEZIA GIULIA">FRIULI VENEZIA GIULIA</option>
  <option value="LAZIO">LAZIO</option>
  <option value="LIGURIA">LIGURIA</option>
  <option value="LOMBARDIA">LOMBARDIA</option>
  <option value="MARCHE">MARCHE</option>
  <option value="MOLISE">MOLISE</option>
  <option value="PIEMONTE">PIEMONTE</option>
  <option value="PUGLIA">PUGLIA</option>
  <option value="SARDEGNA">SARDEGNA</option>
  <option value="SICILIA">SICILIA</option>
  <option value="TOSCANA">TOSCANA</option>
  <option value="TRENTO">TRENTO</option>
  <option value="UMBRIA">UMBRIA</option>
  <option value="VALLE D'AOSTA">VALLE D'AOSTA</option>
  <option value="VENETO">VENETO</option>

</select>
 <div>
 <table style={{"margin":"auto","color":"grey"}} className="table table-striped">
  
 <thead>
   <tr >
    
    <th>Ragione</th>
    <th>Codice vino</th>
    <th>Descrizione</th>
  </tr>
   </thead>
   {this.state.risultato != null  ?  this.state.risultato.map(x => {return (

<tbody>
  <tr>
    <td> {x.regione}</td>
  
    <td> {x.codicevino}</td>
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
