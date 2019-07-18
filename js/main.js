!function(n){var e={};function t(c){if(e[c])return e[c].exports;var g=e[c]={i:c,l:!1,exports:{}};return n[c].call(g.exports,g,g.exports,t),g.l=!0,g.exports}t.m=n,t.c=e,t.d=function(n,e,c){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:c})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var c=Object.create(null);if(t.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var g in n)t.d(c,g,function(e){return n[e]}.bind(null,g));return c},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=0)}([function(module,exports,__webpack_require__){"use strict";eval('\n\n// service worker registration - remove if you\'re not going to use it\n\nif ("serviceWorker" in navigator) {\n  window.addEventListener("load", function () {\n    navigator.serviceWorker.register("serviceworker.js").then(\n      function (registration) {\n        // Registration was successful\n        console.log(\n          "ServiceWorker registration successful with scope: ",\n          registration.scope\n        );\n      },\n      function (err) {\n        // registration failed :(\n        console.log("ServiceWorker registration failed: ", err);\n      }\n    );\n  });\n}\n\n// place your code below\n\nconst add = document.querySelector(".add--js");\nconst subtract = document.querySelector(".subtract--js");\nconst number = document.querySelector(".glass__number--js");\nconst glass = document.querySelector(".glass__path--js");\nconst key = currentDate();\nconst waterSound = new Audio(\'assets/sounds/water.wav\');\nconst drainSound = new Audio(\'assets/sounds/drain.wav\');\n\nfunction currentDate() {\n  const today = new Date();\n  const dd = String(today.getDate()).padStart(2, \'0\');\n  const mm = String(today.getMonth() + 1).padStart(2, \'0\');\n  const yyyy = today.getFullYear();\n  const current = `${dd}/${mm}/${yyyy}`;\n  return current;\n}\n\nif (number) {\n  if (!localStorage.getItem(key)) {\n    localStorage.setItem(key, 0);\n    number.innerHTML = 0;\n    glass.classList.add("glass__path--0");\n  } else {\n    number.innerHTML = localStorage.getItem(key);\n    glass.classList.add(`glass__path--${parseInt(number.innerHTML)}`);\n  }\n}\n\nif (add) {\n  add.addEventListener("click", e => {\n    if (parseInt(number.innerHTML) < 9) {\n      waterSound.play();\n      number.innerHTML = parseInt(number.innerHTML) + 1;\n      localStorage.setItem(key, number.innerHTML);\n      glass.classList.remove(\n        `glass__path--${parseInt(number.innerHTML) - 1}`\n      );\n      glass.classList.add(`glass__path--${parseInt(number.innerHTML)}`);\n    }\n  });\n}\n\nif (subtract) {\n  subtract.addEventListener("click", e => {\n    if (parseInt(number.innerHTML) > 0) {\n      drainSound.play();\n      number.innerHTML = parseInt(number.innerHTML) - 1;\n      localStorage.setItem(key, number.innerHTML);\n      glass.classList.remove(\n        `glass__path--${parseInt(number.innerHTML) + 1}`\n      );\n      glass.classList.add(`glass__path--${parseInt(number.innerHTML)}`);\n    }\n  });\n}\n\nconst table = document.querySelector(".table__body--js");\nif (table) {\n  for (let i = 0; i < localStorage.length; i++) {\n    let key = localStorage.key(i);\n    let value = localStorage.getItem(key);\n    console.log(localStorage.key(i));\n    console.log(localStorage.getItem(localStorage.key(i)));\n    table.innerHTML += `<tr class="table__tr">\n                              <th class="table__th">${key}</th>\n                              <th class="table__th">${value}</th>\n                            </tr>`;\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsR0FBRyxHQUFHLEdBQUcsR0FBRyxLQUFLO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLHdDQUF3QywyQkFBMkI7QUFDbkU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QiwrQkFBK0I7QUFDdkQ7QUFDQSwwQ0FBMEMsMkJBQTJCO0FBQ3JFO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLCtCQUErQjtBQUN2RDtBQUNBLDBDQUEwQywyQkFBMkI7QUFDckU7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQix5QkFBeUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRCxJQUFJO0FBQzFELHNEQUFzRCxNQUFNO0FBQzVEO0FBQ0E7QUFDQSIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIHNlcnZpY2Ugd29ya2VyIHJlZ2lzdHJhdGlvbiAtIHJlbW92ZSBpZiB5b3UncmUgbm90IGdvaW5nIHRvIHVzZSBpdFxuXG5pZiAoXCJzZXJ2aWNlV29ya2VyXCIgaW4gbmF2aWdhdG9yKSB7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVnaXN0ZXIoXCJzZXJ2aWNld29ya2VyLmpzXCIpLnRoZW4oXG4gICAgICBmdW5jdGlvbiAocmVnaXN0cmF0aW9uKSB7XG4gICAgICAgIC8vIFJlZ2lzdHJhdGlvbiB3YXMgc3VjY2Vzc2Z1bFxuICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICBcIlNlcnZpY2VXb3JrZXIgcmVnaXN0cmF0aW9uIHN1Y2Nlc3NmdWwgd2l0aCBzY29wZTogXCIsXG4gICAgICAgICAgcmVnaXN0cmF0aW9uLnNjb3BlXG4gICAgICAgICk7XG4gICAgICB9LFxuICAgICAgZnVuY3Rpb24gKGVycikge1xuICAgICAgICAvLyByZWdpc3RyYXRpb24gZmFpbGVkIDooXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2VydmljZVdvcmtlciByZWdpc3RyYXRpb24gZmFpbGVkOiBcIiwgZXJyKTtcbiAgICAgIH1cbiAgICApO1xuICB9KTtcbn1cblxuLy8gcGxhY2UgeW91ciBjb2RlIGJlbG93XG5cbmNvbnN0IGFkZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLS1qc1wiKTtcbmNvbnN0IHN1YnRyYWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdWJ0cmFjdC0tanNcIik7XG5jb25zdCBudW1iZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdsYXNzX19udW1iZXItLWpzXCIpO1xuY29uc3QgZ2xhc3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdsYXNzX19wYXRoLS1qc1wiKTtcbmNvbnN0IGtleSA9IGN1cnJlbnREYXRlKCk7XG5jb25zdCB3YXRlclNvdW5kID0gbmV3IEF1ZGlvKCdhc3NldHMvc291bmRzL3dhdGVyLndhdicpO1xuY29uc3QgZHJhaW5Tb3VuZCA9IG5ldyBBdWRpbygnYXNzZXRzL3NvdW5kcy9kcmFpbi53YXYnKTtcblxuZnVuY3Rpb24gY3VycmVudERhdGUoKSB7XG4gIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgY29uc3QgZGQgPSBTdHJpbmcodG9kYXkuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCAnMCcpO1xuICBjb25zdCBtbSA9IFN0cmluZyh0b2RheS5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgJzAnKTtcbiAgY29uc3QgeXl5eSA9IHRvZGF5LmdldEZ1bGxZZWFyKCk7XG4gIGNvbnN0IGN1cnJlbnQgPSBgJHtkZH0vJHttbX0vJHt5eXl5fWA7XG4gIHJldHVybiBjdXJyZW50O1xufVxuXG5pZiAobnVtYmVyKSB7XG4gIGlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgMCk7XG4gICAgbnVtYmVyLmlubmVySFRNTCA9IDA7XG4gICAgZ2xhc3MuY2xhc3NMaXN0LmFkZChcImdsYXNzX19wYXRoLS0wXCIpO1xuICB9IGVsc2Uge1xuICAgIG51bWJlci5pbm5lckhUTUwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xuICAgIGdsYXNzLmNsYXNzTGlzdC5hZGQoYGdsYXNzX19wYXRoLS0ke3BhcnNlSW50KG51bWJlci5pbm5lckhUTUwpfWApO1xuICB9XG59XG5cbmlmIChhZGQpIHtcbiAgYWRkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICBpZiAocGFyc2VJbnQobnVtYmVyLmlubmVySFRNTCkgPCA5KSB7XG4gICAgICB3YXRlclNvdW5kLnBsYXkoKTtcbiAgICAgIG51bWJlci5pbm5lckhUTUwgPSBwYXJzZUludChudW1iZXIuaW5uZXJIVE1MKSArIDE7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIG51bWJlci5pbm5lckhUTUwpO1xuICAgICAgZ2xhc3MuY2xhc3NMaXN0LnJlbW92ZShcbiAgICAgICAgYGdsYXNzX19wYXRoLS0ke3BhcnNlSW50KG51bWJlci5pbm5lckhUTUwpIC0gMX1gXG4gICAgICApO1xuICAgICAgZ2xhc3MuY2xhc3NMaXN0LmFkZChgZ2xhc3NfX3BhdGgtLSR7cGFyc2VJbnQobnVtYmVyLmlubmVySFRNTCl9YCk7XG4gICAgfVxuICB9KTtcbn1cblxuaWYgKHN1YnRyYWN0KSB7XG4gIHN1YnRyYWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICBpZiAocGFyc2VJbnQobnVtYmVyLmlubmVySFRNTCkgPiAwKSB7XG4gICAgICBkcmFpblNvdW5kLnBsYXkoKTtcbiAgICAgIG51bWJlci5pbm5lckhUTUwgPSBwYXJzZUludChudW1iZXIuaW5uZXJIVE1MKSAtIDE7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIG51bWJlci5pbm5lckhUTUwpO1xuICAgICAgZ2xhc3MuY2xhc3NMaXN0LnJlbW92ZShcbiAgICAgICAgYGdsYXNzX19wYXRoLS0ke3BhcnNlSW50KG51bWJlci5pbm5lckhUTUwpICsgMX1gXG4gICAgICApO1xuICAgICAgZ2xhc3MuY2xhc3NMaXN0LmFkZChgZ2xhc3NfX3BhdGgtLSR7cGFyc2VJbnQobnVtYmVyLmlubmVySFRNTCl9YCk7XG4gICAgfVxuICB9KTtcbn1cblxuY29uc3QgdGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhYmxlX19ib2R5LS1qc1wiKTtcbmlmICh0YWJsZSkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxvY2FsU3RvcmFnZS5sZW5ndGg7IGkrKykge1xuICAgIGxldCBrZXkgPSBsb2NhbFN0b3JhZ2Uua2V5KGkpO1xuICAgIGxldCB2YWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XG4gICAgY29uc29sZS5sb2cobG9jYWxTdG9yYWdlLmtleShpKSk7XG4gICAgY29uc29sZS5sb2cobG9jYWxTdG9yYWdlLmdldEl0ZW0obG9jYWxTdG9yYWdlLmtleShpKSkpO1xuICAgIHRhYmxlLmlubmVySFRNTCArPSBgPHRyIGNsYXNzPVwidGFibGVfX3RyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3M9XCJ0YWJsZV9fdGhcIj4ke2tleX08L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzPVwidGFibGVfX3RoXCI+JHt2YWx1ZX08L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+YDtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n')}]);