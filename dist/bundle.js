/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/observable/of';
// import 'rxjs/add/operator/map';
// import 'EventEmitter';
// import { EventEmitter } from 'EventEmitter';

const el = document.querySelector('#input');
const out = document.querySelector('#output');
// const emitter = new EventEmitter();

const fetchChannels = term => {
  return fetch(
    `https://api.twitch.tv/kraken/search/channels?client_id=cpar0ny4ga6tv1mzum5aofqrndynje&query=${term}&limit=10`
  );
};
const updateList = channels => {
  const contents = `
    <div class="ui channels">
${channels.map(channel => {
    return `
      <article class="media">
    <div class="media-left">
        <figure class="image is-64x64">
            <img src="${channel.logo}" alt="${channel.name}">
        </figure>
    </div>
    <div class="media-content">
        <div class="content">
            <p>
                <a href="${channel.videoUrl}" target="_blank"><strong>${channel.name}</strong></a> <small class="tw" style="float:right;">channel views: ${channel.views}</small>
            </p>
            <p>
                ${channel.status}
            </p>
        </div>
        <nav class="level">
            <div class="level-left">
                <p class="level-item">playing: ${channel.game}</p>
            </div>
        </nav>
    </div>
</article>
<hr>
    `;
  })}
</div>
`;

  out.innerHTML = contents;
};

// implementation
// let promise = fetchChannels('starcraft');
// promise
//   .then(response => response.json())
//   .then(obj => obj.channels)
//   .then(updateList);

// console.log('breakpoint');

// let timer;
// input.addEventListenter('keyup', event => {
//   const term = event.target.value;
//   if (timer) {
//     clearTimeout(timer);
//   }
//   timer = setTimeout(function() {
//     fetchChannels(term)
//       .then(response => response.json())
//       .then(obj => obj.channels)
//       .then(updateList);
//   }, 300);
// });

input.addEventListener('keyup', event => {
  emitter.emit('input', event);
});
let emitter = new EventEmitter();

emitter.on('input', event => {
  const term = event.target.value;
  fetchChannels(term)
    .then(response => response.json())
    .then(obj => obj.channels)
    .then(updateList);
});


/***/ })
/******/ ]);