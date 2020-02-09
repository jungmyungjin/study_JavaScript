const weather = document.querySelector(".weather");
const API_KEY = "2dae513506f0d07308d0580795f0a62a";
const COORDS = 'coords';

const body = document.querySelector("body");

const askName = document.querySelector("#askName");
const form = askName.querySelector("form");
const input = askName.querySelector("input");

const main = document.querySelector("#main");
const hello = main.querySelector(".hello");
const clock = main.querySelector(".clock");
const toDoList = main.querySelector(".toDoList");

let USER_LS = "USER_LS";
let TODO_LS = "TODO_LS";
let currentUser = null;

const IMG_NUMBER = 6;


function handleInput(event) {
  const userName = input.value;

  if (userName !== null) {
    localStorage.setItem(USER_LS, userName);

  }
}

function greetings(hour) {
  let day = "";
  if (hour < 6) {
    day = "night";
  } else if (hour < 12) {
    day = "morning";
  } else if (hour < 18) {
    day = "afternoon";
  } else if (hour <= 24) {
    day = "evening";
  }

  hello.innerText = `Good ${day}, ${currentUser}`;
}

function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  clock.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
  greetings(hours);
}

function handleCheckbox(event) {
  if (event.target.checked) {
    console.log("checked!!");
  }
  else {
    console.log("unchecked!!");
  }
}

function printTodo() {
  const toDo = localStorage.getItem(TODO_LS);
  if (toDo) {
    const today = document.createElement("p");
    const inputCheck = document.createElement("input");
    const label = document.createElement("label");

    const span = document.createElement("span");
    // const list = document.createElement("p");

    inputCheck.setAttribute("type", "checkbox");
    label.innerText = toDo;

    span.appendChild(inputCheck);
    span.appendChild(label);

    today.innerText = "today";
    toDoList.appendChild(today);
    toDoList.appendChild(span);

    inputCheck.addEventListener("change", handleCheckbox);
  }
  else {
    const createP = document.createElement("p");
    const createForm = document.createElement("form");
    const createInput = document.createElement("input");
    createInput.setAttribute("type", "text");
    createForm.appendChild(createInput);

    createP.innerText = "What is your focus for today?";
    toDoList.appendChild(createP);
    toDoList.appendChild(createForm);

    createForm.addEventListener("submit", function (event) {
      const addList = createInput.value;
      localStorage.setItem(TODO_LS, addList);
      //
    }
    )
  }
}

function getWeather(lat, lon) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`).
    then(function (response) {
      // then : function 과 같음.
      // fetch를 기다리고나서 사용하기 위해 function을 사용하지 않고 then을 사용함
      return response.json();//<< 모르겟
    }).then(function (json) {
      console.log(json);
      const temperature = json.main.temp;
      const place = json.name;
      weather.innerText = `${temperature} @ ${place}`;
    })
}

function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude,
    longitude
  };
  saveCoords(coordsObj);
  getWeather(latitude, longitude);
}

function handleGeoError() {
  console.log("Can't access geo location");
}

function askForCoords() {
  // navigator 객체는 브라우저 공급자 및 버전 정보 등을 포함한 브라우저에 대한 다양한 정보를 저장하는 객체입니다
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords() {
  const loadedCords = localStorage.getItem(COORDS);
  if (loadedCords === null) {
    askForCoords();
  }
  else {
    const parsedCoords = JSON.parse(loadedCords);
    getWeather(parsedCoords.latitude, parsedCoords.longitude);
  }
}

function paintImage(imgNumber) {
  const image = new Image();
  image.src = `./landscape/${imgNumber + 1}.jpg`;
  image.classList.add("bgImage"); // img의 class에 class를
  body.prepend(image);

}

function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}


function init() {
  currentUser = localStorage.getItem(USER_LS);

  const randomNumber = genRandom();
  paintImage(randomNumber);

  if (currentUser === null) {
    // 입력창 출력
    askName.classList.add('showing');
    askName.classList.remove('hidden');
    form.addEventListener("submit", handleInput);

  }
  else {
    main.classList.add('showing');
    main.classList.remove('hidden');
    setInterval(getTime, 1000);
    loadCoords();
    printTodo();
  }
}

init();
