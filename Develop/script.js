
// **GLOBAL VARIABLE** 
var alcohol = "";
var moodIconEl = $('.btn');
$(moodIconEl).on('click', moodSelection());
var mood;


// **HOMEPAGE FUNCTIONS**

function moodSelection (event) {
    var moodSelection = event.Target.id 
    switch (moodSelection) {
        case 'party':
            mood = partySongs;
            alcohol = "vodka";
        case 'happy':
            mood = happySongs;
            alcohol = "tequila";
        case 'sad':
            mood = sadSongs;
            alcohol = "whisky";
        case 'romantic':
            mood = romanticSongs;
            alcohol = "wine";
    }

};

// **YOUTUBE FEATURE**

// youtube variables 

var youtubeApiKey = 'AIzaSyCI6sWXjrEI3KSY-_yPVxhyq7nEueF_eLY';
var youtubeUrl = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=dog&key=${youtubeApiKey}`;

// var youtubePlaylistUrl = `https://youtube.googleapis.com/youtube/v3/playlists?part=id&maxResults=1&q=dog&key=${youtubeApiKey}`;

var partySongs = 'JTjoH1HNkbs';
var happySongs = 'uNd5kvrGHjk';
var sadSongs = 'iiADY4xmH_o';
var romanticSongs = '3cVjaKY02lA';

// https://www.youtube.com/playlist?list=PLuIQYSWMlyQXtk7AVxC9aPJiEv3Pn_mal


var videoId;

// youtube functions

var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        videoId: videoId,
        playerVars: {
        'playsinline': 1,
        'autoplay': 1
        },
        events: {
        'onReady': onPlayerReady,
        // 'onStateChange': onPlayerStateChange
        }
    });
    
}

function onPlayerReady() {
    fetchYoutubeData();
}

function fetchYoutubeData() {
    fetch(youtubeUrl)
    .then(function (response) {
        return response.json();
    })
    .then (function (data) {
        console.log(data);
        videoId = 'WHuBW3qKm9g'
        player.loadVideoById(`${sadSongs}`, 0);
        // player.loadPlaylist(partySongs, 0, 0)
    })
}
       

// **COCKTAIL FEATURE**






// **TESTS**

// **EXECUTION**







//COCKTAIL CODE START 
console.log('dummy.js loaded')
//making sure java has loaded 




function getRandomCocktail() {
    ingredient;
    fetch(`https:www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`)
    .then(
    function(response) {
        if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
            response.status);
        return;
        } //<----comment all in to run 

        //Examine the text in the response
       response.json().then(function(data) {
       console.log(data); 
       displayRandomCocktail(data);//<---open this and close above to display elements 
       
      //TO TEST: comment out console.log(data) and comment in displayRandomCocktail. To view data pulled from api comment out 
      //displayRandomCocktail and comment in console.log(data). 
       
      });
   }
   )
   .catch(function(err) {
   console.log('Fetch Error :-S', err);
   });
} //<--- Need to comment all above minus TO TEST

getRandomCocktail();//runs the api to pull drink data 

function displayRandomCocktail(cocktail){
   console.log(cocktail.drinks[0]);//<----comment in at LEAST one to run
   //console.log(cocktail.drinks[0].strGlass);
   //console.log(cocktail.drinks[0].strIngredient);
   //console.log(cocktail.drinks[0].strInstructions);
   //console.log(cocktail.drinks[0].strMeasure);

   var drinkSection = document.querySelector('#drink');

   var drinkName = document.createElement('h2');
   //var drinkGlass = document.createElement('h2') don't need 
   var drinkInstruct = document.createElement('h3')

   
   drinkName.innerHTML = cocktail.drinks[0].strDrink;
   //drinkGlass.innerHTML = cocktail.drinks[0].strGlass; don't need 
   drinkInstruct.innerHTML = cocktail.drinks[0].strInstructions;
 
   drinkSection.appendChild(drinkName);
   //drinkSection.appendChild(drinkGlass); don't need 
   drinkSection.appendChild(drinkInstruct);

   //var img = document.createElement('img');
   //img.src = cocktail.drinks[0].strDrinkthumb;

   //drinkSection.appendChild(img);

   for(let i=1; i<16; i++){
    console.log();

    if(cocktail.drinks[0][`strIngredient${i}`]== null || cocktail.drinks[0[`strIngredient${i}`]]== '' ){
        break;
    }

    var ingredient = document.createElement('li');
    ingredient.innerHTML = cocktail.drinks[0][`strMeasure${i}`] + ': ' + cocktail.drinks[0][`strIngredient${i}`];

    drinkSection.appendChild(ingredient);
   }

}















