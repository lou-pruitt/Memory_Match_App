class GameArea {
  constructor() {
    this.createGameArea();
    this.cardInner = document.querySelectorAll('.game-area__card__inner');
    this.cardBackFlip = document.querySelectorAll(
      '.game-area__card__inner__back'
    );
    this.events();
  }

  events() {
    let firstCard = '';
    let secondCard = '';
    let count = 0;
    let matchedCards = [];
    let delay = 2000;

    const cardsClicked = document.querySelectorAll('.game-area__card');
    for (const cardClicked of cardsClicked) {
      cardClicked.addEventListener('click', function(e) {
        let clicked = e.target;
        let clickedImage =
          e.target.parentNode.nextElementSibling.childNodes[0].src;
        if (clicked.nodeName === 'GAME') {
          return;
        }

        if (count < 2) {
          count++;
          if (count === 1) {
            firstCard = clickedImage;
            clicked.parentElement.parentElement.classList.add(
              'game-area__card__inner--flip-card'
            );
          } else {
            secondCard = clickedImage;
            clicked.parentElement.parentElement.classList.add(
              'game-area__card__inner--flip-card'
            );
          }

          if (firstCard !== '' && secondCard !== '') {
            if (firstCard === secondCard) {
              match();
              resetGuesses();
            } else {
              setTimeout(resetGuesses, delay);
              setTimeout(unFlip, delay);
            }
          }
        }
      });
    }

    const match = () => {
      matchedCards.push(firstCard, secondCard);
    };

    const unFlip = () => {
      var flipped = document.querySelectorAll('.game-area__card__inner');
      flipped.forEach(card => {
        if (matchedCards.length > 0) {
          var stayflipped = card.childNodes[1].children[0].src;
          console.log('matchedCards: ', matchedCards);
          if (stayflipped !== matchedCards[0]) {
            // Find out how to iterate through matchedCards and find cards that don't match to unflip================================
            card.classList.remove('game-area__card__inner--flip-card');
          }
        } else {
          console.log('no items in matchedCards');
          card.classList.remove('game-area__card__inner--flip-card');
        }
      });
    };

    const resetGuesses = () => {
      firstCard = '';
      secondCard = '';
      count = 0;
    };
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
