let button = document.getElementById('absenden');






button.addEventListener('click', getWeatherData);

async function getWeatherData(){
    await fetch(`https://weatherdbi.herokuapp.com/data/weather/${document.querySelector('input').value}`)
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
            //console.log(obj);

            //console.log(data.next_days);
            const next_days = data.next_days;
            
            //next_days.forEach((element => addElement(element.day)));
            //next_days.forEach((element => addPicture(element.iconURL)));
            next_days.forEach((element => createCard(element.iconURL, element.day)));

            //addPicture(obj.iconURL);
            //addElement(data.region);
            });
}

function createCard(newimage, datatext) {
    var newDiv = document.createElement("div");
    newDiv.classList = "card";
    var image = document.createElement("img");
    image.src = newimage;
    newDiv.appendChild(image);

    var newContent = document.createTextNode(datatext);
    newDiv.appendChild(newContent);



  var currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
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
var newDiv = document.createElement("div");
var image = document.createElement("img");
image.src = data;
newDiv.appendChild(image);

var currentDiv = document.getElementById("div1");
document.body.insertBefore(newDiv, currentDiv);
}