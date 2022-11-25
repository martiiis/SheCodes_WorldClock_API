/** @format */
function updateTime() {
  //Tel Aviv
  let telAvivElement = document.querySelector("#tel-aviv");
  let telAvivDateElement = telAvivElement.querySelector(".date");
  let telAvivTimeElement = telAvivElement.querySelector(".time");
  let telAvivTime = moment().tz("Asia/Jerusalem");

  telAvivDateElement.innerHTML = telAvivTime.format("MMMM Do YYYY");
  telAvivTimeElement.innerHTML = telAvivTime.format("H:mm:ss");

  //Madrid
  let madridElement = document.querySelector("#madrid");
  let madridDateElement = madridElement.querySelector(".date");
  let madridTimeElement = madridElement.querySelector(".time");
  let madridTime = moment().tz("Europe/Madrid");

  madridDateElement.innerHTML = madridTime.format("MMMM Do YYYY");
  madridTimeElement.innerHTML = madridTime.format("H:mm:ss");

  //New York
  let newYorkElement = document.querySelector("#new-york");
  let newYorkDateElement = newYorkElement.querySelector(".date");
  let newYorkTimeElement = newYorkElement.querySelector(".time");
  let newYorkTime = moment().tz("America/New_York");

  newYorkDateElement.innerHTML = newYorkTime.format("MMMM Do YYYY");
  newYorkTimeElement.innerHTML = newYorkTime.format("H:mm:ss");
}

updateTime();
setInterval(updateTime, 1000);
