class GameArea {
  constructor() {
    this.createGameArea();
    this.cardInner = document.querySelectorAll('.game-area__card__inner');
    this.cardBackFlip = document.querySelectorAll(
      '.game-area__card__inner__back'
    );
    this.firstCard = '';
    this.secondCard = '';
    this.matchedCards = [];
    this.flippedCards = [];
    this.count = 0;
    this.delay = 1000;
    this.playMatch = new Audio('assets/images/sounds/match.mp3');
    this.playNoMatch = new Audio('assets/images/sounds/no_match.mp3');

    this.events();
  }

  events() {
    document.querySelectorAll('.game-area__card').forEach(card => {
      card.addEventListener('click', e => {
        let clickedCard = e.target;
        let cardImage =
          clickedCard.parentNode.nextElementSibling.childNodes[0].src;
        this.flipCard(clickedCard, cardImage);
      });
    });
  }

  flipCard(clickedCard, cardImage) {
    if (this.count < 2) {
      this.count++;
      if (this.count === 1) {
        this.firstCard = cardImage;
        this.flippedCards.push(this.firstCard);
        clickedCard.parentElement.parentElement.classList.add(
          'game-area__card__inner--flip-card'
        );
      } else {
        this.secondCard = cardImage;
        this.flippedCards.push(this.secondCard);
        clickedCard.parentElement.parentElement.classList.add(
          'game-area__card__inner--flip-card'
        );
      }
    }
    this.checkMatch();
  }

  checkMatch() {
    if (this.firstCard !== '' && this.secondCard !== '') {
      if (this.firstCard === this.secondCard) {
        this.match();
      } else {
        this.noMatch();
      }
    }
  }

  match() {
    this.matchedCards.push(this.firstCard, this.secondCard);
    this.playMatch
      .play()
      .then(() => {
        console.log('audio: match');
      })
      .catch(e => {
        console.log('audio error: match', e.message);
      });
    this.resetGuesses();
  }

  noMatch() {
    this.playNoMatch
      .play()
      .then(() => {
        console.log('audio: no match');
      })
      .catch(e => {
        console.log('audio error: no match', e.message);
      });
    setTimeout(() => {
      this.resetFlippedCards();
    }, this.delay);
    setTimeout(() => {
      this.resetGuesses();
    }, this.delay);
  }

  resetGuesses() {
    this.firstCard = '';
    this.secondCard = '';
    this.count = 0;
    this.flippedCards = [];
  }

  resetFlippedCards() {
    document
      .querySelectorAll('.game-area__card__inner--flip-card')
      .forEach(card => {
        if (this.matchedCards.length > 0) {
          let currentCard = card.children[1].children[0].src;
          let previousCard = this.matchedCards.find(this.findCard);

          if (this.matchedCards.includes(currentCard)) {
            return;
          } else if (this.flippedCards[0] !== this.flippedCards[1]) {
            card.classList.remove('game-area__card__inner--flip-card');
          }
        } else if (this.matchedCards.length === 0) {
          card.classList.remove('game-area__card__inner--flip-card');
        }
      });
  }

  findCard(card) {
    return card;
  }

  createGameArea() {
    this.gameArea = document.createElement('game');
    this.gameArea.classList.add('game-area');
    document.body.appendChild(this.gameArea);
    this.createCards();
  }

  createCards() {
    this.cardImages = [
      {
        src: 'assets/images/contra.jpg',
        alt: 'Contra'
      },
      {
        src: 'assets/images/donkey_kong.jpg',
        alt: 'Donkey Kong'
      },
      {
        src: 'assets/images/dungeon_master.jpg',
        alt: 'Dungeon Master'
      },
      {
        src: 'assets/images/mega_man_2.jpg',
        alt: 'Mega Man'
      },
      {
        src: 'assets/images/metroid.jpg',
        alt: 'Metroid'
      },
      {
        src: 'assets/images/missile_command.jpg',
        alt: 'Missile Command'
      },
      {
        src: 'assets/images/super_mario_bros_3.jpg',
        alt: "Super Mario Bros' 3"
      },
      {
        src: 'assets/images/tetris.jpg',
        alt: 'Tetris'
      },
      {
        src: 'assets/images/contra.jpg',
        alt: 'Contra'
      },
      {
        src: 'assets/images/donkey_kong.jpg',
        alt: 'Donkey Kong'
      },
      {
        src: 'assets/images/dungeon_master.jpg',
        alt: 'Dungeon Master'
      },
      {
        src: 'assets/images/mega_man_2.jpg',
        alt: 'Mega Man'
      },
      {
        src: 'assets/images/metroid.jpg',
        alt: 'Metroid'
      },
      {
        src: 'assets/images/missile_command.jpg',
        alt: 'Missile Command'
      },
      {
        src: 'assets/images/super_mario_bros_3.jpg',
        alt: "Super Mario Bros' 3"
      },
      {
        src: 'assets/images/tetris.jpg',
        alt: 'Tetris'
      }
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
        this.cardFrontImage.src = 'assets/images/hasslehoff.jpg';
        this.cardFrontImage.setAttribute('alt', 'David Hasslehoff');
        this.randomBackImage();
        this.cardBackImage.src = this.backImageSrc;
        this.cardBackImage.setAttribute('alt', this.backImageAlt);
        this.card.appendChild(this.cardInner);
        this.cardInner.appendChild(this.cardFront);
        this.cardInner.appendChild(this.cardBack);
        this.cardBack.appendChild(this.cardBackImage);
        this.cardFront.appendChild(this.cardFrontImage);
        this.cardRow.appendChild(this.card);
      }
    }
  }

  randomBackImage() {
    this.backImageObject = this.cardImages.splice(
      Math.floor(Math.random() * this.cardImages.length),
      1
    )[0];
    this.backImageSrc = this.backImageObject.src;
    this.backImageAlt = this.backImageObject.alt;
  }
}

export default GameArea;
