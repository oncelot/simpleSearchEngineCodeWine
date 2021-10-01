export const letturaDati = ChangeEvent => {


console.log(ChangeEvent.target.value);

if(ChangeEvent.target.value.length > 2){
return (fetch('/api?filtro='+ChangeEvent.target.value)
    .then(response => response.json())
    .then(json =>  {
      return json;
    })
)}else {return Promise.resolve( [{CIDCTZ:"",CIDCDEN:"",CIDCSOT:"",CIDCVAR:"",CIDCCOL:"",CIDCMTR:"",CIDCCAT:	"",CIDCINV:"",CIDCTIP:"",codicecompleto:"",descrizione:''}]);
}
  
  }