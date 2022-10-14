// **GLOBAL VARIABLE** 





// **YOUTUBE FEATURE**

// youtube variables 

var youtubeApiKey = 'AIzaSyCI6sWXjrEI3KSY-_yPVxhyq7nEueF_eLY';
var youtubeUrl = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=dog&key=${youtubeApiKey}`;
var videoId;

var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '200',
        width: '500',
        videoId: videoId,
        playerVars: {
        'playsinline': 1,
        'autoplay': 0
        },
        events: {
        // 'onReady': onPlayerReady,
        // 'onStateChange': onPlayerStateChange
        }
    });
}

// youtube functions

function fetchYoutubeData() {
    fetch(youtubeUrl)
    .then(function (response) {
        return response.json();
    })
    .then (function (data) {
        console.log(data);
        // videoId = data.items[0].id.videoId;
        videoId = '7Gc4PVl_QeQ'
        var tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        // onYouTubeIframeAPIReady();
    })
}



// player.playVideo();

// Play video automatically when loaded

// function onPlayerStateChange(event) {
//     if (event.data == YT.PlayerState.CUED) {
//         event.target.playVideo();
//         console.log('ready');
//         }
//     }

// 4. The API will call this function when the video player is ready.
// function onPlayerReady(event) {
// event.target.playVideo();
// }

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.

// var done = false;
// function onPlayerStateChange(event) {
// if (event.data == YT.PlayerState.PLAYING && !done) {
//     setTimeout(stopVideo, 6000);
//     done = true;
//     }
// }

// function stopVideo() {
// player.stopVideo();
// }        



// **COCKTAIL FEATURE**






// **TESTS**

// **EXECUTION**

fetchYoutubeData();
onYouTubeIframeAPIReady();





//COCKTAIL CODE START 
//IN DUMMY TEST this java was linked to random HTML page. Need to link html drink-practice or random html to view. 

//console.log('dummy.js loaded')
//making sure java has loaded 

//may be unnecessary in the example
//document.addEventListener('prechange', function(event) {
  //  document.querySelector()
//})


//function getRandomCocktail() {
    //fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
   // .then(
    //function(response) {
        //if (response.status !== 200) {
        //console.log('Looks like there was a problem. Status Code: ' +
           // response.status);
       // return;
      //  } <----comment all in to run 

        // Examine the text in the response
        //response.json().then(function(data) {
        //console.log(data); 
       // displayRandomCocktail(data); //<---open this and close above to display elements 
       
       //TO TEST: comment out console.log(data) and comment in displayRandomCocktail. To view data pulled from api comment out 
       //displayRandomCocktail and comment in console.log(data). 
       
       //});
    //}
    //)
    //.catch(function(err) {
    //console.log('Fetch Error :-S', err);
    //});
//} <--- Need to comment all above minus TO TEST

//getRandomCocktail();//runs the api to pull drink data 

//function displayRandomCocktail(cocktail){
    //console.log(cocktail.drinks[0].strDrink);<----comment in at LEAST one to run
   // console.log(cocktail.drinks[0].strGlass);
   // console.log(cocktail.drinks[0].strIngredient);
   // console.log(cocktail.drinks[0].strInstructions);
    //console.log(cocktail.drinks[0].strMeasure);
    //when active will display from api the following: 


// strDrink: Displays drink name 
//strDrinkThumb: Displays picture of drink if available will need to input code for null result to display image not
//found. 
//strGlass: recommended serving glass (may not need) 
//strIngredient: This is listed 1-15 and result is null if no other ingredients are present. Need to build this to continue
//and pull ingredient and move one forward each time until it hits null then stop. 
//strInstructions: displays how to make drink 
//strMeasure: same as ingredient shows how much of each ingredient 

//Current issues Ingredients and Measure have multiple variable that I need to possible make into an array to have console log pull data. 
//They console log as undefined. Need to write code to pull all before
//null and console log. Once complete can work on displaying to page. 

//TO TEST: 
//Comment in above variables from console.log and refresh page. Will currently display Drink Name, Glass type, Ingredients as undefined, Instructions,
//Measure as undefined. 

//To view data from current api see line 130.







    
//} 