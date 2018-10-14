var playing = false;
var audio = new Audio('sounds/forest.mp3');
audio.loop = true;

var sounds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(n => {
    return new Audio(`sounds/${n}.mp3`);
});

function getWord(arr) {
    return arr[Math.floor(Math.random()*arr.length)];
}

function toggleSound() {
    if (!playing) {
        playing = true;
        document.getElementById("sounds").innerHTML = "Sound is On 🔊"
        audio.play();
    }
    else {
        playing = false;
        document.getElementById("sounds").innerHTML = "Sound is Off 🔇"
        audio.pause();
    }
}

function pickWords() {

    var story = "";

    if (playing) {
        getWord(sounds).play();
    }

    var pre = getWord(pre_words);
    var c = getWord(case_words);
    var adj = getWord(adj_words);
    var noun = getWord(noun_words);
    var in_place = getWord(in_place_words);
    var in_place_n = getWord(in_place_nothe);
    var on_place = getWord(on_place_words);
    var end = getWord(end_words);

    var type = Math.random();

    if (type < .33) {
        story = (Math.random() > .3) ? `${c} of the ${adj} ${noun}` : `${adj} ${c} of the ${noun}`;
    }
    else if (type >= .33 && type < .66) {
        story = `${adj} ${noun} ${end}`;
    }
    else {
        var onType = Math.random();
        if (onType < .33) {
            story = (Math.random() > .3) ? `${c} in The ${adj} ${in_place}` : `${adj} ${in_place} ${end}`;    
        }
        else if (onType >=.33 && onType > .66) {
            story = (Math.random() > .3) ? `${c} in ${adj} ${in_place_n}` : `${adj} ${in_place_n} ${end}`
        }
        else {
            story = (Math.random() > .3) ? `${c} on ${adj} ${on_place}` : `${adj} ${on_place} ${end}`
        }
        
    }

    if (Math.random() > .4) story = `The ${story}`

    $("#story").stop().html(story).css({opacity: 0}).fadeTo(1300, 1);
}

window.onload = pickWords;