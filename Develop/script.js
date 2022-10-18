// // **GLOBAL VARIABLE** 

var moodIconEl = $('.btn');
$(moodIconEl).on('click', moodSelection());
var mood;


// **HOMEPAGE FUNCTIONS**

function moodSelection (event) {
    var moodSelection = event.Target.id 
    switch (moodSelection) {
        case 'party':
            mood = partySongs;
        case 'happy':
            mood = happySongs;
        case 'sad':
            mood = sadSongs;
        case 'romantic':
            mood = romanticSongs;
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
//var result = document.querySelector("result");

//var url = "https:www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka";

//var data = document.querySelector("tequila")

//var userInp = data

//var getInfo = () => {
 
    //fetch(url + userInp)
      //.then((response) => response.json())
      //.then((data) => {
        //document.querySelector("tequila").value = ""; // here is where I am confusing myself 
        //console.log(data);
        //console.log(data.drinks[0]);
        //var myDrink = data.drinks[0];
        ///console.log(myDrink.strDrink);
        //console.log(myDrink.strDrinkThumb);
        //console.log(myDrink.strInstructions);
        //var count = 1;
        //var ingredients = [];
        //for (var i in myDrink) {
          //var ingredient = "";
          //var measure = "";
          //if (i.startsWith("strIngredient") && myDrink[i]) {
            //ingredient = myDrink[i];
            //if (myDrink[`strMeasure` + count]) {
              //measure = myDrink[`strMeasure` + count];
            //} else {
              //measure = "";
            //}
            //count += 1;
            //ingredients.push(`${measure} ${ingredient}`);
          //}
        //}
        //console.log(ingredients);
        //result.innerHTML = `
      //<img src=${myDrink.strDrinkThumb}>
      //<h2>${myDrink.strDrink}</h2>
      //<h3>Ingredients:</h3>
      //<ul class="ingredients"></ul>
      //<h3>Instructions:</h3>
      //<p>${myDrink.strInstructions}</p>
      //`;
        //var ingredientsCon = document.querySelector(".ingredients");
        //ingredients.forEach((item) => {
          //var listItem = document.createElement("li");
          //listItem.innerText = item;
          //ingredientsCon.appendChild(listItem);
        //});
      //})
      //.catch(() => {
        //result.innerHTML = `<h3 class="msg">Please enter a valid input</h3>`;
      //};//);
  //};

//window.addEventListener("load", getInfo);















