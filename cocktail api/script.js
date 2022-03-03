const cocktail_result = document.getElementById('cocktail_result');
const cocktail_btn  = document.getElementById('cocktail_btn');


cocktail_btn.addEventListener('click', getRandomCocktail);

function getRandomCocktail(){
    fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
		.then(res => res.json())
		.then(data => {
            console.log(data);
            console.log(data.drinks[0].strDrink);
			
				cocktail_result.innerHTML = `<img src=${data.drinks[0].strDrinkThumb} alt="cocktail" />`;
                cocktail_resultText.innerHTML = `<h1>${data.drinks[0].strDrink}</h1>`;
                rezept.innerHTML = `<p>${data.drinks[0].strIngredient1}</p><br>`;
                rezept2.innerHTML = `<p>${data.drinks[0].strIngredient2}</p><br>`;
                rezept3.innerHTML = `<p>${data.drinks[0].strIngredient3}</p><br>`;
            });
}