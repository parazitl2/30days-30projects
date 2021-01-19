const handleKeyDown = (event) => {
  const keyCode = event.keyCode;
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  const keyElement = document.querySelector(`.key[data-key="${keyCode}"]`);

  if (!audio) {
    return;
  }

  audio.currentTime = 0;
  audio.play();
  keyElement.classList.add('playing');
  keyElement.classList.add('pulse');

  keyElement.addEventListener('transitionend', (e) => {
    keyElement.classList.remove('pulse');
  }, { once: true });

  audio.addEventListener('ended', (e) => {
    keyElement.classList.remove('playing');
  });
};

window.addEventListener('keydown', handleKeyDown);