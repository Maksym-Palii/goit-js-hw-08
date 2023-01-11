import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

const videoCurrentTime = 'videoplayer-current-time';

const onTimeupdate = function ({ duration, percent, seconds }) {
  duration: 61.857;
  percent: 0.049;
  seconds: 3.034;

  // data is an object containing properties specific to that event
};

player.on('timeupdate', onTimeupdate);

player
  .setCurrentTime(30.456)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
