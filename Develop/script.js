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