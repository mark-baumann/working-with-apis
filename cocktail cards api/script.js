const cocktail_btn  = document.getElementById('cocktail_btn');
const suche = document.getElementById('suche');

cocktail_btn.addEventListener('click', getRandomCocktail);

function getRandomCocktail(){
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + suche.value)
		.then(res => res.json())
		.then(data => {
          //  console.log(data);
            

           for (var i = 0; i < data.drinks.length; i++) {
           

            document.write("<h1>" +data.drinks[i].strDrink + "</h1>");  
            document.write("<img src='" +data.drinks[i].strDrinkThumb + "' height='300' width='300' />");
            
            console.log(suche.value);
            
           }
    
                
            });

}


