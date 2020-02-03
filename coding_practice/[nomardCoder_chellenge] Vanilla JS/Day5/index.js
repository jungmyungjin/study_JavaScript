function getCurrentDate(){
  let currentDate = new Date();
  const christmasDate = new Date('2020-12-25')

  let seconds = Math.floor((christmasDate - (currentDate))/1000);
  let minutes = Math.floor(seconds/60);
  let hours = Math.floor(minutes/60);
  let days = Math.floor(hours/24);

  hours = hours-(days*24);
  minutes = minutes - (days*24*60) - (hours*60);
  seconds = seconds-(days*24*60*60)-(hours*60*60)-(minutes*60);

  const printDateHandle = document.querySelector("#time");
  printDateHandle.innerText=`${days}d ${hours <10 ? `0${hours}` : hours }h ${minutes <10 ?`0${minutes}` : minutes}m ${seconds < 10 ? `0${seconds}`:seconds}s`;

}
function init (){
  getCurrentDate();
  // setInterval(getCurrentDate,1000);

};

init();
