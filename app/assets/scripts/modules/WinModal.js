import GameArea from './GameArea';

class WinModal {
  constructor(accuracy, attempts, gamesPlayed) {
    this.accuracy = accuracy.toPrecision(3);
    this.attempts = attempts;
    this.gameNumber = gamesPlayed;
    this.injectHtml();
    this.winModal = document.querySelector('.win-modal');
    this.playAgainBtn = document.querySelector('.win-modal__play-again-btn');
    this.events();
  }

  injectHtml() {
    if (this.gameNumber > 1) {
      return;
    }
    document.body.insertAdjacentHTML(
      'beforebegin',
      `
      <div class="win-modal">
        <div class="win-modal__inner">
          <h2
            class="win-message win-message--less-margin"
          >
            Stats
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
        <div class="stats__games-played">
          <p class="stats__games-played__title">Game</p>
          <div id="win-game-number${this.gameNumber}" class="value">0</div>
        </div>
        <div class="stats__accuracy">
          <p class="stats__accuracy__title">Accuracy</p>
          <div id="win-accuracy${this.gameNumber}" class="value">0</div>
        </div>
        <div class="stats__attempts">
          <p class="stats__attempts__title">Attempts</p>
          <div id="win-attempts${this.gameNumber}" class="value">0</div>
        </div>
      </div>
    `
    );
  }

  updateStats() {
    document.getElementById('win-accuracy' + this.gameNumber).innerHTML =
      this.accuracy + '%';
    document.getElementById(
      'win-attempts' + this.gameNumber
    ).innerHTML = this.attempts;
    document.getElementById(
      'win-game-number' + this.gameNumber
    ).innerHTML = this.gameNumber;
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
