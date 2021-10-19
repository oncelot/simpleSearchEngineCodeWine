export const letturaDati = dati => {
console.log(dati.risultato);

if(dati.filtro.length > 2 || dati.regioni.length >1){
return (
  fetch('http://localhost:8000/api',
  {method:'POST',
  body:JSON.stringify(dati)}
  )
    .then(response => response.json())
    .then(json =>  {
      return json;
    })
)}else {return Promise.resolve( [{Regione:"",codicevino:"",descrizione:''}]);
}
  
  }