"use strict";

// service worker registration - remove if you're not going to use it

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker.register("serviceworker.js").then(
      function (registration) {
        // Registration was successful
        console.log(
          "ServiceWorker registration successful with scope: ",
          registration.scope
        );
      },
      function (err) {
        // registration failed :(
        console.log("ServiceWorker registration failed: ", err);
      }
    );
  });
}

// place your code below

const add = document.querySelector(".buttons__add--js");
const subtract = document.querySelector(".buttons__subtract--js");
const number = document.querySelector(".glass__counter--js");
const glass = document.querySelector(".glass__path--js");
const key = currentDate();
const waterSound = new Audio('assets/sounds/water.wav');
const drainSound = new Audio('assets/sounds/drain.wav');
const audio = document.querySelector(".onoffswitch-checkbox--js")

function currentDate() {
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const yyyy = today.getFullYear();
  const current = `${dd}/${mm}/${yyyy}`;
  return current;
}

checkTableData('assa')

function checkTableData(data) {
  const regex = new RegExp('\\d{2}/\\d{2}/\\d{4}')
  if (data.match(regex)) {
    return true
  }
}

if (number) {
  if (!localStorage.getItem(key)) {
    localStorage.setItem(key, 0);
    number.innerHTML = 0;
    glass.classList.add("glass__path--0");
  } else {
    number.innerHTML = localStorage.getItem(key);
    glass.classList.add(`glass__path--${parseInt(number.innerHTML)}`);
  }
}

if (add) {
  add.addEventListener("click", e => {
    if (parseInt(number.innerHTML) < 9) {
      console.log(audio.checked)
      if (audio.checked) {
        waterSound.play();
      }
      number.innerHTML = parseInt(number.innerHTML) + 1;
      localStorage.setItem(key, number.innerHTML);
      glass.classList.remove(
        `glass__path--${parseInt(number.innerHTML) - 1}`
      );
      glass.classList.add(`glass__path--${parseInt(number.innerHTML)}`);
    }
  });
}

if (subtract) {
  subtract.addEventListener("click", e => {
    e.preventDefault();
    console.log(audio.value)
    if (parseInt(number.innerHTML) > 0) {
      if (audio.checked) {
        drainSound.play();
      }
      number.innerHTML = parseInt(number.innerHTML) - 1;
      localStorage.setItem(key, number.innerHTML);
      glass.classList.remove(
        `glass__path--${parseInt(number.innerHTML) + 1}`
      );
      glass.classList.add(`glass__path--${parseInt(number.innerHTML)}`);
    }
  });
}

const table = document.querySelector(".table__body--js");
if (table) {
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let value = localStorage.getItem(key);
    if (checkTableData(key)) {
      table.innerHTML += `<tr class="table__tr">
                              <td class="table__td">${key}</td>
                              <td class="table__td">${value}</td>
                            </tr>`;
    }
  }
}

