
// **GLOBAL VARIABLE** 
var alcohol = "vodka";
var moodIconEl = document.querySelectorAll('a');

for (var i = 0; i < moodIconEl.length; i++) {
    moodIconEl[i].addEventListener('click', moodSelection)
}
var mood;

// youtube variables 



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
            break;
        case 'happy':
            localStorage.setItem('mood' ,happySongs);
            localStorage.setItem('alcohol', "tequila");
            break;
        case 'sad':
            localStorage.setItem('mood', sadSongs);
            localStorage.setItem('alcohol', "whisky");
            break;
        case 'romantic':
            localStorage.setItem('mood', romanticSongs);
            localStorage.setItem('alcohol', "wine");
            break;
    }
    window.location = './Presentation.html'

};





  

// **COCKTAIL FEATURE**






// **TESTS**

// **EXECUTION**







//COCKTAIL CODE START 
console.log('dummy.js loaded')
//making sure java has loaded 



