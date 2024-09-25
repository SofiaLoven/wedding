const tablePlacing = document.querySelector("#tablePlacing");
const rickrolled = document.querySelector("#rickrolled");
const daysLeft = document.querySelector("#numOfDays");

const weddingDate = new Date("Aug 31, 2025 14:30:00").getTime();

const countdown = setInterval(function () {
  var now = new Date().getTime();

  var timeLeft = weddingDate - now;

  var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  daysLeft.innerText =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  if (timeLeft < 0) {
    clearInterval(countdown);
    daysLeft.innerText = "Dags för bröllop!!";
  }
}, 1000);

tablePlacing.addEventListener("click", () => {
  rickrolled.innerText = "Rickrolled!";
});
