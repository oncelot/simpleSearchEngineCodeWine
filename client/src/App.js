import './App.css';
import React from 'react';
import {Corpo} from './Corpo';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={risultato:null, regioni:'',filtro:''};

  }
render(){console.log("prova"); return (
<div className="container">
  <Corpo></Corpo>
    </div>
)
}
}



export default App;

