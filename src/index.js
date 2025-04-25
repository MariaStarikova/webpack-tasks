import './index.scss';
import summerSound from '../public/assets/sounds/summer.mp3';
import rainSound from '../public/assets/sounds/rain.mp3';
import winterSound from '../public/assets/sounds/winter.mp3';

const page = document.querySelector('.page');
const pauseButton = document.querySelector('.pause__button');
const volume = document.querySelector('.volume__slider');
const summerButton = document.getElementById('button_summer');
const rainButton = document.getElementById('button_rain');
const snowButton = document.getElementById('button_snow');

const summerAudio = new Audio(summerSound);
const rainAudio = new Audio(rainSound);
const snowAudio = new Audio(winterSound);

const audios = [summerAudio, rainAudio, snowAudio];

function setAudioControls(audio) {
  volume.addEventListener('change', e => {
    audio.volume = e.currentTarget.value / 100;
  });

  pauseButton.addEventListener('click', () => {
    audio.pause();
  });
}

audios.forEach(audio => setAudioControls(audio));

function stopAllAudios() {
  audios.forEach(audio => {
    audio.pause();
  });
}

function toggleSound(audio) {
  if (audio.paused) {
    stopAllAudios();
    audio.play();
  } else {
    audio.pause();
  }
}

function setSeason(seasonClass) {
  page.classList.remove('page_summer', 'page_rain', 'page_snow');
  page.classList.add(seasonClass);
}

summerButton.addEventListener('click', () => {
  toggleSound(summerAudio);
  setSeason('page_summer');
});
rainButton.addEventListener('click', () => {
  toggleSound(rainAudio);
  setSeason('page_rain');
});
snowButton.addEventListener('click', () => {
  toggleSound(snowAudio);
  setSeason('page_snow');
});
