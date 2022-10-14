console.log('dummy.js loaded')
//making sure java has loaded 

//may be unnecessary in the example
//document.addEventListener('prechange', function(event) {
  //  document.querySelector()
//})


function getRandomCocktail() {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    .then(
    function(response) {
        if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
            response.status);
        return;
        }

        // Examine the text in the response
        response.json().then(function(data) {
        console.log(data); //<--- open this and close below to view api elements
       // displayRandomCocktail(data); //<---open this and close above to display elements 
        });
    }
    )
    .catch(function(err) {
    console.log('Fetch Error :-S', err);
    });
}

getRandomCocktail();//runs the api to pull drink data 

function displayRandomCocktail(cocktail){
    console.log(cocktail.drinks[0].strDrink);
   // console.log(cocktail.drinks[0].strGlass);
   // console.log(cocktail.drinks[0].strIngredient);
   // console.log(cocktail.drinks[0].strInstructions);
    //console.log(cocktail.drinks[0].strMeasure);
    
    
} // at current this code and api combo displays random drinks. Will update api to pull random drink based on 