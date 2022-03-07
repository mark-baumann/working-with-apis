const cocktail_btn  = document.getElementById('cocktail_btn');
const suche = document.getElementById('suche');



cocktail_btn.addEventListener('click', getCocktail);

function getCocktail(){
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + suche.value)
		.then(res => res.json())
		.then(data => {
          //  console.log(data);
            

           for (var i = 0; i < data.drinks.length; i++) {
           

            document.write("<h1>" +data.drinks[i].strDrink + "</h1>");  
            document.write("<img src='" +data.drinks[i].strDrinkThumb + "' height='300' width='300' />");
            document.write("<p> Beschreibung: "+data.drinks[i].strInstructionsDE + "</p>" );
            document.write("<p> Zutat 1: "+data.drinks[i].strIngredient1 + "</p>" );
            document.write("<p> Zutat 2: "+data.drinks[i].strIngredient2 + "</p>" );
            if (data.drinks[i].strIngredient3 != null) {
              document.write("<p> Zutat 3: "+data.drinks[i].strIngredient3 + "</p>" );
            }        
            
           }
    
                
            });

}


