import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

const el = document.querySelector('#input');
const out = document.querySelector('#output');

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
                <a href="${channel.videoUrl}" target="_blank"><strong>${channel.name}</strong></a> <small class="tw" style="float:right;">channel views: {$channel.views}</small>
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
};

// implementation
// let promise = fetchChannels('starcraft');
// promise
//   .then(response => response.json())
//   .then(obj => obj.channels)
//   .then(updateList);
// let timer;
// input.addEventListenter('keyup', event => {
//   const term = event.target.value;
//   if (timer) {
//     clearTimeout(timer);
//   }
//   timer = setTimeout(function() {
//     fetchChannels(term)
//       .then(resp => resp.json())
//       .then(obj => obj.channels)
//       .then(updateList);
//   }, 300);
// });
// let emitter = new EventE();

// input.addEventListener('keyup', event => {
//   emitter.emit('input', event);
// });
// emitter.on('input', event => console.log(event));
// function newFunction() {
//   console.log('nada');
// }