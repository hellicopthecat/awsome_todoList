const time = document.getElementById("clock");

function makeClock() {
  const date = new Date();
  const dateHour = String(date.getHours()).padStart(2, "0");
  const dateMinutes = String(date.getMinutes()).padStart(2, "0");
  const dateSeconds = String(date.getSeconds()).padStart(2, "0");

  time.innerText = `${dateHour} : ${dateMinutes} : ${dateSeconds}`;
}

makeClock();
setInterval(makeClock, 1000);
