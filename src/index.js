import './css/style.css';
import Api from './modules/api.js';
import refresh from './modules/display.js';

const request = new Api();

const displayData = async () => {
  const data = await request.getScores();
  refresh(data);
};

displayData();

document.querySelector('.refresh').addEventListener('click', async () => {
  displayData();
});

document.getElementById('inputScores').addEventListener('submit', async (e) => {
  e.preventDefault();
  const userName = document.querySelector('.name');
  const userScore = document.querySelector('.n-score');
  const data = {
    user: userName.value,
    score: userScore.value,
  };
  await request.addScore(data);
  displayData();
});
