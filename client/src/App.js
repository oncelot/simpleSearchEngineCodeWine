import logo from './logo.svg';
import './App.css';
import {letturaDati} from './controlli';
import React from 'react';
import {Corpo} from './Corpo';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
class App extends React.Component{
  constructor(props){
    super(props);
    this.state={risultato:null, regioni:'',filtro:''};

  }
render(){console.log("prova"); return (


<div className="container">
  <div>

</div>
<Router>
      <div>
        <nav>
        <ul className="nav">
  <li className="nav-item">
  <Link className="nav-link"  to="/ABRUZZO">ABRUZZO</Link>
  </li>
  <li className="nav-item">
  <Link className="nav-link" to="/BASILICATA">BASILICATA</Link>
  </li>
  <li className="nav-item">
  <Link className="nav-link"  to="/BOLZANO">BOLZANO</Link>
  </li>
  <li className="nav-item">
  <Link className="nav-link" to="/CALABRIA">CALABRIA</Link>
  </li>
  <li className="nav-item">
  <Link className="nav-link"  to="/CAMPANIA">CAMPANIA</Link>
  </li>
  <li className="nav-item">
  <Link className="nav-link" to="/EMILIAROMAGNA">EMILIA ROMAGNA</Link>
  </li>
  <li className="nav-item">
  <Link className="nav-link"  to="/FRIULIVENEZIAGIULIA">FRIULI VENEZIA GIULIA</Link>
  </li>
  <li className="nav-item">
  <Link className="nav-link" to="/LAZIO">LAZIO</Link>
  </li>
  <li className="nav-item">
  <Link className="nav-link"  to="/LIGURIA">LIGURIA</Link>
  </li>
  <li className="nav-item">
  <Link className="nav-link" to="/LOMBARDIA">LOMBARDIA</Link>
  </li>
  <li className="nav-item">
  <Link className="nav-link"  to="/MARCHE">MARCHE</Link>
  </li>
  <li className="nav-item">
  <Link className="nav-link" to="/MOLISE">MOLISE</Link>
  </li>
  <li className="nav-item">
  <Link className="nav-link"  to="/PIEMONTE">PIEMONTE</Link>
  </li>
  <li className="nav-item">
  <Link className="nav-link" to="/PUGLIA">PUGLIA</Link>
  </li>
  <li className="nav-item">
  <Link className="nav-link"  to="/SARDEGNA">SARDEGNA</Link>
  </li>
  <li className="nav-item">
  <Link className="nav-link" to="/SICILIA">SICILIA</Link>
  </li>
  <li className="nav-item">
  <Link className="nav-link" to="/TOSCANA">TOSCANA</Link>
  </li>
  <li className="nav-item">
  <Link className="nav-link" to="/TRENTO">TRENTO</Link>
  </li>
  <li className="nav-item">
  <Link className="nav-link" to="/UMBRIA">UMBRIA</Link>
  </li>
  <li className="nav-item">
  <Link className="nav-link" to="/VALLEDAOSTA">VALLE D'AOSTA</Link>
  </li>
  <li className="nav-item">
  <Link className="nav-link" to="/VENETO">VENETO</Link>
  </li>
</ul>



        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/ABRUZZO"><ABRUZZO/></Route>
          <Route path="/BASILICATA"><BASILICATA /></Route>
          <Route path="/BOLZANO"><BOLZANO /></Route>
          <Route path="/CALABRIA"><CALABRIA /></Route>
          <Route path="/CAMPANIA"><CAMPANIA /></Route>
          <Route path="/EMILIAROMAGNA"><EMILIAROMAGNA /></Route>
          <Route path="/FRIULIVENEZIAGIULIA"><FRIULIVENEZIAGIULIA /></Route>
          <Route path="/LAZIO"><LAZIO /></Route>
          <Route path="/LIGURIA"><LIGURIA /></Route>
          <Route path="/LOMBARDIA"><LOMBARDIA /></Route>
          <Route path="/MARCHE"><MARCHE /></Route>
          <Route path="/MOLISE"><MOLISE /></Route>
          <Route path="/PIEMONTE"><PIEMONTE /></Route>
          <Route path="/PUGLIA"><PUGLIA /></Route>
          <Route path="/SARDEGNA"><SARDEGNA /></Route>
          <Route path="/SICILIA"><SICILIA /></Route>
          <Route path="/TOSCANA"><TOSCANA /></Route>
          <Route path="/TRENTO"><TRENTO /></Route>
          <Route path="/UMBRIA"><UMBRIA /></Route>
          <Route path="/VALLEDAOSTA"><VALLEDAOSTA /></Route>
          <Route path="/VENETO"><VENETO /></Route>
          


         
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>

)
}
}

function Home() {
  return ( <Corpo regioni=""/>)
}
function ABRUZZO() {return ( <Corpo regioni="ABRUZZO"/> ) }
function BASILICATA() {return ( <Corpo regioni="BASILICATA"/>)}
function BOLZANO() {return ( <Corpo regioni="BOLZANO"/>)}
function CALABRIA() {return ( <Corpo regioni="CALABRIA"/>)}
function CAMPANIA() {return ( <Corpo regioni="CAMPANIA"/>)}
function EMILIAROMAGNA() {return ( <Corpo regioni="EMILIA ROMAGNA"/>)}
function FRIULIVENEZIAGIULIA() {return ( <Corpo regioni="FRIULI VENEZIA GIULIA"/>)}
function LAZIO() {return ( <Corpo regioni="LAZIO"/>)}
function LIGURIA() {return ( <Corpo regioni="LIGURIA"/>)}
function LOMBARDIA() {return ( <Corpo regioni="LOMBARDIA"/>)}
function MARCHE() {return ( <Corpo regioni="MARCHE"/>)}
function MOLISE() {return ( <Corpo regioni="MOLISE"/>)}
function PIEMONTE() {return ( <Corpo regioni="PIEMONTE"/>)}
function PUGLIA() {return ( <Corpo regioni="PUGLIA"/>)}
function SARDEGNA() {return ( <Corpo regioni="SARDEGNA"/>)}
function SICILIA() {return ( <Corpo regioni="SICILIA"/>)}
function TOSCANA() {return ( <Corpo regioni="TOSCANA"/>)}
function TRENTO() {return ( <Corpo regioni="TRENTO"/>)}
function UMBRIA() {return ( <Corpo regioni="UMBRIA"/>)}
function VALLEDAOSTA() {return ( <Corpo regioni="VALLE D'AOSTA"/>)}
function VENETO() {return ( <Corpo regioni="VENETO"/>)}


export default App;

