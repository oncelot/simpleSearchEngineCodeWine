import { useState , useEffect} from "react"
import { ListaRegioni } from "./listaRegioni";
import { letturaDati } from "./controlli";
import { ListaVini } from "./listaVini";
import { Redirect } from "react-router";
export const Corpo= function (props){
  
const [risultato,setRisultato]=useState();
const [filtri,setFiltri]=useState({filtro:'',regioni:props.regioni});
useEffect(() => {
  letturaDati({filtro:filtri.filtro,regioni:filtri.regioni}).then(x=>{setRisultato(x);});
},[]);
return (
<div className="row">  
   
    <div className="row"  style={{textAlign:"center"}}>
      <h1 >Il motore di ricerca dei vini italiani</h1>
      <div className="col-md-6">
     <input type="Text" onKeyUp={changeEvent=>
     letturaDati({filtro:changeEvent.target.value,regioni:filtri.regioni}).then(x=>{setRisultato(x)})
    }
          className="form-control col-md-6" placeholder="Cerca per codice vino/tipologia"  />
          </div>
          <div className="col-md-6">
    <select id="inputRegioni"  className="form-control col-md-6" 
    onChange={changeEvent=>{
      setFiltri({regioni:changeEvent.target.value});
      letturaDati({filtro:filtri.filtro,regioni:changeEvent.target.value}).then(x=>{setRisultato(x)})
     
    }
      
      }>
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
     <ListaVini elencoRicerca={risultato} />
      
    </div></div>)
}
