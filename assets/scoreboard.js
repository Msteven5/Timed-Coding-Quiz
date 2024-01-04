var finalScore = JSON.parse(localStorage.getItem('finalScore'));

const board = document.getElementById("board");

finalScore.sort(function(a, b) {
    return b.score - a.score;
});

for(var i = 0; i < finalScore.length; i++) {
    var tracker = finalScore[i];

    var li = document.createElement("li");
    li.textContent =  tracker.initials.toUpperCase() + " | Score: " + tracker.score;

    board.appendChild(li);
}