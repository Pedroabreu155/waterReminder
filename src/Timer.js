import { View } from './View.js'

const Timer = {
  time: 0.1 * 60,
  currentTime: 0,
  interval: null,

  init() {
    Timer.currentTime = Timer.time;
    Timer.interval = setInterval(Timer.countdown, 1000);
  },

  countdown() {
    Timer.currentTime = Timer.currentTime - 1;
    console.log(Timer.currentTime);

    if (Timer.currentTime === 0) {
      clearInterval(Timer.interval);
      return;
    }
  },
};

export { Timer };
