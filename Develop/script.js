
// **GLOBAL VARIABLE** 
var alcohol = "vodka";
var moodIconEl = document.querySelectorAll('a');

for (var i = 0; i < moodIconEl.length; i++) {
    moodIconEl[i].addEventListener('click', moodSelection)
}
var mood;




// **HOMEPAGE FUNCTIONS**

// **YOUTUBE FEATURE**

// youtube variables 



// var youtubePlaylistUrl = `https://youtube.googleapis.com/youtube/v3/playlists?part=id&maxResults=1&q=dog&key=${youtubeApiKey}`;

var partySongs = 'JTjoH1HNkbs';
var happySongs = 'uNd5kvrGHjk';
var sadSongs = 'iiADY4xmH_o';
var romanticSongs = '3cVjaKY02lA';

function moodSelection (event) {
    console.log(event);
    var moodSelection = event.target.getAttribute('id') 
    switch (moodSelection) {
        case 'party':
            console.log('check')
            localStorage.setItem('mood', partySongs);
            localStorage.setItem('alcohol', "vodka");
        case 'happy':
            localStorage.setItem('mood' ,happySongs);
            localStorage.setItem('alcohol', "tequila");
        case 'sad':
            localStorage.setItem('mood', sadSongs);
            localStorage.setItem('alcohol', "whisky");
        case 'romantic':
            localStorage.setItem('mood', romanticSongs);
            localStorage.setItem('alcohol', "wine");
    }
    window.location = './Presentation.html'

};

// https://www.youtube.com/playlist?list=PLuIQYSWMlyQXtk7AVxC9aPJiEv3Pn_mal


  

// **COCKTAIL FEATURE**






// **TESTS**

// **EXECUTION**







//COCKTAIL CODE START 
console.log('dummy.js loaded')
//making sure java has loaded 




