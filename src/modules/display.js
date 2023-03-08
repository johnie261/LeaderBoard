const scoresContainer = document.querySelector('.scores-list');
export default async (Games) => {
  scoresContainer.innerHTML = '';
  Games.sort((a, b) => b.score - a.score);
  for (let i = 0; i < Games.length; i += 1) {
    scoresContainer.innerHTML += `
        <div class='scoreBoard'>
            <p class='Title'>'${Games[i].user}': ${Games[i].score}</p>
        </div>`;
  }
};
