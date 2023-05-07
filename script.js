let countdownIntervalId;

function startTimer(event) {
  if (event.key !== "Enter") return;

  let timeCountInput = document.getElementById("timeCount");
  let currentTimeDiv = document.getElementById("current-time");
  let timeCount = Math.floor(Number(timeCountInput.value));
  
  if (isNaN(timeCount)) {
    currentTimeDiv.textContent = "0";
    return;
  }

  clearInterval(countdownIntervalId);
  currentTimeDiv.textContent = timeCount;
  countdownIntervalId = setInterval(() => {
    timeCount--;
    if (timeCount < 0) {
      clearInterval(countdownIntervalId);
      currentTimeDiv.textContent = "0";
      return;
    }
    currentTimeDiv.textContent = timeCount;
  }, 1000);
}

window.addEventListener("load", () => {
  let timeCountInput = document.getElementById("timeCount");
  timeCountInput.addEventListener("keydown", startTimer);
});
