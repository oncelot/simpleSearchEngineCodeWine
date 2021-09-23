export const letturaDati = ChangeEvent => {


console.log(ChangeEvent.target.value);

return (    fetch('http://localhost:8000/api?filtro='+ChangeEvent.target.value)
    .then(response => response.json())
    .then(json =>  {
      return json;
    })
)
  
  }