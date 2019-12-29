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
      'assets/images/hasslehoff.jpg',
      'assets/images/contra.jpg',
      'assets/images/donkey_kong.jpg',
      'assets/images/dungeon_master.jpg',
      'assets/images/mega_man_2.jpg',
      'assets/images/metroid.jpg',
      'assets/images/missile_command.jpg',
      'assets/images/super_mario_bros_3.jpg',
      'assets/images/tetris.jpg',
      'assets/images/zelda.jpg',
      'assets/images/contra.jpg',
      'assets/images/donkey_kong.jpg',
      'assets/images/dungeon_master.jpg',
      'assets/images/mega_man_2.jpg',
      'assets/images/metroid.jpg',
      'assets/images/missile_command.jpg',
      'assets/images/super_mario_bros_3.jpg',
      'assets/images/tetris.jpg',
      'assets/images/zelda.jpg'
    ];
    this.cardIndex = this.cardImages.length - 1;

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
        this.cardFrontImage.src = this.cardImages[0];
        this.cardBackImage.src = this.cardImages[this.cardIndex];
        this.cardIndex--;
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
