import GameArea from './GameArea';

class WinModal {
  constructor() {
    this.injectHtml();
    this.winModal = document.querySelector('.win-modal');
    this.playAgainBtn = document.querySelector('.win-modal__play-again-btn');
    this.events();
  }

  injectHtml() {
    document.body.insertAdjacentHTML(
      'beforeend',
      `
      <div class="win-modal">
        <div class="win-modal__inner">
          <h2
            class="win-message win-message--less-margin"
          >
            You Win!
          </h2>
          <div id="win-stats" class="win-stats"></div>
          <div class="wrapper wrapper--narrow">
            <button class="win-modal__play-again-btn">Play Again</button>
          </div>
        </div>
      </div>
      `
    );
  }

  events() {
    this.playAgainBtnHandler = this.closeWinModal.bind(this);
    this.playAgainBtn.addEventListener(
      'click',
      this.playAgainBtnHandler,
      false
    );
    this.openWinModal();
  }

  openWinModal() {
    this.winModal.classList.add('win-modal--is-visible');
    this.injectStats();
    this.updateStats();
  }

  injectStats() {
    var winStats = document.getElementById('win-stats');
    winStats.insertAdjacentHTML(
      'beforeend',
      `
      <div class="stats">
        <h1 class="stats__title">Stats:</h1>
        <div class="stats__games-played">
          <p class="stats__games-played__title">Games played:</p>
          <div id="games-played" class="value">0</div>
        </div>
        <div class="stats__accuracy">
          <p class="stats__accuracy__title">Accuracy:</p>
          <div id="accuracy" class="value">0</div>
        </div>
        <div class="stats__attempts">
          <p class="stats__attempts__title">Attempts:</p>
          <div id="attempts" class="value">0</div>
        </div>
      </div>
    `
    );
  }

  updateStats() {
    document.getElementById('accuracy').innerHTML = GameArea.accuracy;
    document.getElementById('attempts').innerHTML = GameArea.attempts;
    document.getElementById('games-played').innerHTML = GameArea.gamesPlayed;
  }

  closeWinModal() {
    var startSound = document.getElementById('start-sound');
    startSound.play();
    var bgMusic = document.getElementById('background_music');
    bgMusic.play();
    this.winModal.classList.remove('win-modal--is-visible');
    this.playAgainBtn.removeEventListener(
      'click',
      this.playAgainBtnHandler,
      false
    );
  }
}

export default WinModal;
