const refs = {
    btnStart: document.querySelector('button[data-start]'),
    btnStop: document.querySelector('button[data-stop]'),
    body: document.querySelector('body'),
  };
  
  refs.btnStop.disabled = true;
  let timerId = null;
  
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  
  function onStartSwitchColor() {
    refs.btnStart.disabled = true;
    refs.btnStop.disabled = false;
  
    timerId = setInterval(() => {
      let color = getRandomHexColor();
      refs.body.style.backgroundColor = color;
    }, 1000);
  }
  
  function onStopSwitchColor() {
    clearInterval(timerId);
    refs.btnStart.disabled = false;
    refs.btnStop.disabled = true;
  }
  
  refs.btnStart.addEventListener('click', onStartSwitchColor);
  refs.btnStop.addEventListener('click', onStopSwitchColor);
