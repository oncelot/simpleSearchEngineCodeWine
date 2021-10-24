import { useState } from "react"

export const ListaVini = function (props){
const [lista,setLista]=useState({regione:props.regione,drescrizione:props.descrizione,codicevino:props.codicevino});
return (  <div>
    <table style={{"margin":"auto","color":"grey"}} className="table table-striped">
     
    <thead>
      <tr>
       <th>Ragione</th>
       <th>Codice vino</th>
       <th>Descrizione</th>
     </tr>
      </thead>
      {props.elencoRicerca != null  ?  props.elencoRicerca.map(x => {return (
   <tbody>
     <tr>
       <td> {x.regione}</td>
       <td> {x.codicevino}</td>
       <td> {x.descrizione}</td>
     </tr>
     </tbody>
      ) }) : ''} 
      </table> </div>)
}