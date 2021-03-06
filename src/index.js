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
                <a href="${channel.videoUrl}" target="_blank"><strong>${
      channel.name
    }</strong></a> <small class="tw" style="float:right;">channel views: ${
      channel.views
    }</small>
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
