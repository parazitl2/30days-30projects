const setHands = () => {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  const secondsHand = document.querySelector('.sec-hand');
  secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes();
  const minutesDegrees = (mins / 60) * 360 + 90;
  const minutesHand = document.querySelector('.min-hand');
  minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;

  const hours = now.getHours();
  const hoursDegrees = (hours / 24) * 360 + 90;
  const hoursHand = document.querySelector('.hour-hand');
  hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;
};

setInterval(setHands, 1000);