export const letturaDati = dati => {
console.log(dati.risultato);

if(dati.filtro > 2){
return (fetch('http://localhost:8000/api?filtro='+dati.filtro+'&regione='+dati.regioni)
    .then(response => response.json())
    .then(json =>  {
      return json;
    })
)}else {return Promise.resolve( [{Regione:"",codicevino:"",descrizione:''}]);
}
  
  }