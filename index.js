document.getElementById("buttonAPI").addEventListener("click",function(event){

  event.preventDefault() //La méthode preventDefault () annule l'événement s'il 
//est annulable, ce qui signifie que l'action par défaut qui appartient à l'événement ne se produira pas.

const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url = "http://roberta-eliza.herokuapp.com/predict"; // site that doesn’t send Access-Control-*
let area= parseInt(document.getElementById("area").value);
let room= parseInt(document.getElementById("rooms-number").value);
let postal= parseInt(document.getElementById("postal-code").value);
let house= document.getElementById('property-type').value;

console.log(area);
console.log(room);
console.log(postal);
console.log(house);


let data= {
    data:{
      'area': area,
      'property-type': house,
      'rooms-number': room,
      'zip-code': postal
    }
    
}

fetch(proxyurl + url, { 
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
  body: JSON.stringify(data)})
                                                     // https://cors-anywhere.herokuapp.com/https://example.com
.then(response => response.json())
.then(contents => {
  console.log(contents);
  document.querySelector("#buttonAPI").insertAdjacentHTML("afterend",`<p>price estimation: ${contents.prediction.price} € </p>`) //${contents.prediction.price} increment une variable
} )
.catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))

});