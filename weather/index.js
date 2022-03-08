let button = document.getElementById('absenden');
let input = document.getElementById('city');

button.addEventListener('click', getWeatherData);

function getWeatherData(input){
    fetch('https://weatherdbi.herokuapp.com/data/weather/gera')
		.then(res => res.json())
		.then(data => {
           
            //console.log(data);

            /* show all keys
            var key = [];
            for (key in data) {
                console.log(key, data[key]);
            }*/
            
            //json obj als javascript object
            const obj = data.currentConditions;
            console.log(obj);
            addPicture(obj.iconURL);
            




            addElement(data.region);
            });
}



function addElement (data) {
  // erstelle ein neues div Element
  // und gib ihm etwas Inhalt
  var newDiv = document.createElement("div");
  var newContent = document.createTextNode(data);
  newDiv.appendChild(newContent); // füge den Textknoten zum neu erstellten div hinzu.
 

  // füge das neu erstellte Element und seinen Inhalt ins DOM ein
  var currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
}


function addPicture(data) {
var image = document.createElement("img");
image.src = data;
document.body.appendChild(image);
}