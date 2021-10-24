import { letturaDati } from "./controlli";
import { ListaVini } from "./listaVini";

export const ListaRegioni = function (props){
const risultato='';


    return ( <div className="col-md-6">
    <select id="inputRegioni"  className="form-control col-md-6" 
    onChange={changeEvent=>{
      letturaDati({filtro:'',regioni:changeEvent.target.value}).then(x=>{risultato=x;})}}>
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
  )
}