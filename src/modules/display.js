export default async (Games) => {
  const scoresContainer = document.querySelector('.scores-list');
  scoresContainer.innerHTML = '';
  Games.sort((a, b) => b.score - a.score);
  for (let i = 0; i < Games.length; i += 1) {
    scoresContainer.innerHTML += `
        <div class='scoreBoard'>
            <p class='Title'>${i + 1}. ${Games[i].user}: ${Games[i].score}</p>
        </div>`;
  }
};
