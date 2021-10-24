export const letturaDati = dati => {
console.log("dentro");
if(dati.filtro != null){
if(dati.filtro.length > 2 || dati.regioni.length >1){
  console.log(dati.filtro);
  console.log(dati.regioni);
return (
  fetch('http://api.codicedelvino.it/api',
  {method:'POST',
  body:JSON.stringify(dati)}
  )
    .then(response => response.json())
    .then(json =>  {
      return json;
    })
)
}else {return Promise.resolve( [{Regione:"",codicevino:"",descrizione:''}]);}
}else {return Promise.resolve( [{Regione:"",codicevino:"",descrizione:''}]);}
 }

