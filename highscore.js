const highScoresList = document.getElementById('highScoresList');
const highScores = JSON.parse(localStorage.getItem('HighScores')) || [];
console.log(highScores);

highScoresList.innerHTML = highScores.map(score =>{
    return `<li class="high-score">${score.username} - ${score.score}</l1>`;
}).join("");