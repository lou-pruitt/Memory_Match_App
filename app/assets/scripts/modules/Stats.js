class Stats {
  constructor() {
    this.injectStats();
  }

  injectStats() {
    var header = document.getElementById('header');
    header.insertAdjacentHTML(
      'afterend',
      `
      <div class="stats">
        <h1 class="stats__title">Stats:</h1>
        <div class="stats__games-played">
          <p class="stats__games-played__title">Games played:</p>
          <div id="games-played" class="value">0</div>
        </div>
        <div class="stats__accuracy">
          <p class="stats__accuracy__title">Accuracy:</p>
          <div id="accuracy" class="value">100%</div>
        </div>
        <div class="stats__attempts">
          <p class="stats__attempts__title">Attempts:</p>
          <div id="attempts" class="value">0</div>
        </div>
      </div>
    `
    );
  }
}

export default Stats;
