import { useState } from "react"
import { letturaDati } from "./controlli";

export const Corpo= function (props){
  
const [risultato,setRisultato]=useState();
const [filtri,setFiltri]=useState({filtro:'',regioni:props.regioni,risultato:''});

return (
<div className="row">  
    <div className="row"  style={{textAlign:"center"}}>
      <h1 >Il motore di ricerca dei vini italiani</h1>
      <div className="col-md-6">
     <input type="Text" onKeyUp={changeEvent=>
setFiltri({filtro:changeEvent.target.value}), ()=>
letturaDati(filtri).then(x=>{setRisultato(x)})
    }
          className="form-control col-md-6" placeholder="Cerca per codice vino/tipologia"  />
          </div>
          <div className="col-md-6">
     <select id="inputRegioni" className="form-control col-md-6" onChange={changeEvent=>{letturaDati(changeEvent.target.value).then(x=>{setRisultato(x);})}}>
     <option value="">Seleziona Regione</option>
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
    </div>
     <div>
     <table style={{"margin":"auto","color":"grey"}} className="table table-striped">
      
     <thead>
       <tr >
        
        <th>Ragione</th>
        <th>Codice vino</th>
        <th>Descrizione</th>
      </tr>
       </thead>
       {risultato != null  ?  risultato.map(x => {return (
    
    <tbody>
      <tr>
        <td> {x.regione}</td>
      
        <td> {x.codicevino}</td>
        <td> {x.descrizione}</td>
        
      </tr>
      </tbody>
    
       ) }) : ''} 
       </table> </div>
     
      
    </div></div>)
    document.getElementById('inputRegioni').value=props.regioni;
}
