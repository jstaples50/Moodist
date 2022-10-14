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
        'autoplay': 1
        },
        events: {
        'onReady': onPlayerReady,
        // 'onStateChange': onPlayerStateChange
        }
    });
    
}

// youtube functions


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
        videoId = '7Gc4PVl_QeQ'
        player.loadVideoById(videoId, 0);
    })
}
       

// **COCKTAIL FEATURE**






// **TESTS**

// **EXECUTION**

// fetchYoutubeData();
// onYouTubeIframeAPIReady();