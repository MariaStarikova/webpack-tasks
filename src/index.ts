import './index.scss';
import summerSound from '../public/assets/sounds/summer.mp3';
import rainSound from '../public/assets/sounds/rain.mp3';
import winterSound from '../public/assets/sounds/winter.mp3';

let page: HTMLBodyElement | null = null;
let pauseButton: HTMLButtonElement | null = null;
let volume: HTMLInputElement | null = null;
let summerButton: HTMLElement | null = null;
let rainButton: HTMLElement | null = null;
let snowButton: HTMLElement | null = null;

const summerAudio = new Audio(summerSound);
const rainAudio = new Audio(rainSound);
const snowAudio = new Audio(winterSound);

const audios = [summerAudio, rainAudio, snowAudio];

interface ButtonConfigModel {
  buttonClass: string;
  audio: HTMLAudioElement;
  seasonClass: string;
}

const buttonConfigs: ButtonConfigModel[] = [
  { buttonClass: 'button_summer', audio: summerAudio, seasonClass: 'page_summer' },
  { buttonClass: 'button_rain', audio: rainAudio, seasonClass: 'page_rain' },
  { buttonClass: 'button_snow', audio: snowAudio, seasonClass: 'page_snow' }
];

function initialize() {
  page = document.querySelector('.page');
  pauseButton = document.querySelector('.pause__button');
  volume = document.querySelector('.volume__slider');
  summerButton = document.getElementById('button_summer');
  rainButton = document.getElementById('button_rain');
  snowButton = document.getElementById('button_snow');
}

initialize();

function setAudioControls(audio: HTMLAudioElement) {
  if (volume) {
    volume.addEventListener('change', e => {
      const target = e.currentTarget as HTMLInputElement;
      audio.volume = Number(target.value) / 100;
    });
  }

  if (pauseButton) {
    pauseButton.addEventListener('click', () => {
      audio.pause();
    });
  }
}

audios.forEach(audio => setAudioControls(audio));

function stopAllAudios() {
  audios.forEach(audio => {
    audio.pause();
  });
}

function toggleSound(audio: HTMLAudioElement) {
  if (audio.paused) {
    stopAllAudios();
    audio.play();
  } else {
    audio.pause();
  }
}

function setSeason(seasonClass: string) {
  if (page) {
    page.classList.remove('page_summer', 'page_rain', 'page_snow');
    page.classList.add(seasonClass);
  }
}

buttonConfigs.forEach(({ buttonClass, audio, seasonClass }) => {
  const button = document.getElementById(buttonClass);
  if (button) {
    button.addEventListener('click', () => {
      toggleSound(audio);
      setSeason(seasonClass);
    });
  }
});
