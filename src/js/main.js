"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below

const add = document.querySelector('.add--js')
const subtract = document.querySelector('.subtract--js')
const number = document.querySelector('.glass__number--js')
const key = new Date().toISOString().slice(0, 10)

if (!localStorage.getItem(key)) {
  localStorage.setItem(key, 0)
  number.innerHTML = 0
} else {
  number.innerHTML = localStorage.getItem(key)
}

add.addEventListener('click', (e) => {
  if (parseInt(number.innerHTML) < 9) {
    number.innerHTML = parseInt(number.innerHTML) + 1
    localStorage.setItem(key, number.innerHTML)
  }
})

subtract.addEventListener('click', (e) => {
  if (parseInt(number.innerHTML) > 0) {
    number.innerHTML = parseInt(number.innerHTML) - 1
    localStorage.setItem(key, number.innerHTML)
  }
})