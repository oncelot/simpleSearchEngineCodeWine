export const letturaDati = ChangeEvent => {
console.log(ChangeEvent.target.value);

if(ChangeEvent.target.value.length > 2){
return (fetch('http://localhost:8000/api?filtro='+ChangeEvent.target.value)
    .then(response => response.json())
    .then(json =>  {
      return json;
    })
)}else {return Promise.resolve( [{Regione:"",codicevino:"",descrizione:''}]);
}
  
  }