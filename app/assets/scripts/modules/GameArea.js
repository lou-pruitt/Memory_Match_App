class GameArea {
  constructor() {
    this.createGameArea();
    this.eventHandlers();
  }

  eventHandlers() {}

  events() {}

  createGameArea() {
    this.gameArea = document.createElement('div');
    this.gameArea.classList.add('game-area');
    document.body.appendChild(this.gameArea);
    this.createCards();
  }

  createCards() {
    this.cardImages = [
      'https://www.mobygames.com/images/covers/l/34445-missile-command-atari-2600-front-cover.jpg'
    ];
    for (let i = 0; i < 4; i++) {
      this.cardRow = document.createElement('div');
      this.cardRow.classList.add('game-area__row');
      this.gameArea.appendChild(this.cardRow);

      for (let index = 0; index < 4; index++) {
        this.card = document.createElement('div');
        this.cardInner = document.createElement('div');
        this.cardFront = document.createElement('div');
        this.cardFrontImage = document.createElement('img');
        this.cardBack = document.createElement('div');
        this.cardBackImage = document.createElement('img');
        this.card.classList.add('game-area__card');
        this.cardInner.classList.add('game-area__card__inner');
        this.cardFront.classList.add('game-area__card__inner__front');
        this.cardFrontImage.classList.add('game-area__card__inner__front__img');
        this.cardBack.classList.add('game-area__card__inner__back');
        this.cardBackImage.classList.add('game-area__card__inner__back__img');
        this.cardFrontImage.src =
          'https://vignette.wikia.nocookie.net/callofduty/images/d/d1/SpacelandDJ_Zombies_IW.png/revision/latest?cb=20160816202120';
        this.cardBackImage.src = this.cardImages[0];
        this.card.appendChild(this.cardInner);
        this.cardInner.appendChild(this.cardFront);
        this.cardInner.appendChild(this.cardBack);
        this.cardBack.appendChild(this.cardBackImage);
        this.cardFront.appendChild(this.cardFrontImage);
        this.cardRow.appendChild(this.card);
      }
    }
  }
}

export default GameArea;
