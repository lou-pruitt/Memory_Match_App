import WinModal from './WinModal';
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
    this.matchCounter = 0;
    this.matches = 0;
    this.attempts = 0;
    this.accuracy = 0;
    this.totalPossibleMatches = 8;
    this.gamesPlayed = 0;

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
        this.attempts++;
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
    this.matchCounter++;
    this.matches++;

    this.playMatch = new Audio('assets/images/sounds/match.mp3');
    this.playMatch
      .play()
      .then(() => {
        console.log('audio: match');
      })
      .catch(e => {
        console.log('audio error: match', e.message);
      });
    if (this.matchCounter === this.totalPossibleMatches) {
      this.gamesPlayed++;
      this.bgMusic = document.getElementById('background_music');
      this.bgMusic.pause();
      this.bgMusic.currentTime = 0;
      this.playSoftWin = new Audio('assets/images/sounds/soft_win.mp3');
      this.playSoftWin
        .play()
        .then(() => {
          console.log('audio: soft_win');
        })
        .catch(e => {
          console.log('audio error: soft_win', e.message);
        });
      let winModal = new WinModal(
        this.accuracy,
        this.attempts,
        this.gamesPlayed
      );
      this.winReset();
    } else if (this.matchCounter === 6) {
      this.playAlmost = new Audio('assets/images/sounds/almost_there.mp3');
      this.playAlmost
        .play()
        .then(() => {
          console.log('audio: almost_there');
        })
        .catch(e => {
          console.log('audio error: almost_there', e.message);
        });
    } else if (this.matchCounter === 3) {
      this.playAmazing = new Audio('assets/images/sounds/amazing.mp3');
      this.playAmazing
        .play()
        .then(() => {
          console.log('audio: amazing');
        })
        .catch(e => {
          console.log('audio error: amazing', e.message);
        });
    }
    this.matchedCards.push(this.firstCard, this.secondCard);

    this.resetGuesses();
  }

  winReset() {
    this.matchedCards = [];
    this.matchCounter = 0;
    this.matches = 0;
    this.accuracy = 0;
    this.attempts = 0;
    document.getElementById('game-area').remove();
    this.createGameArea();
    this.events();
    this.updateStats();
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

  updateStats() {
    if (this.matches !== 0 && this.attempts !== 0) {
      this.accuracy = (this.matches / this.attempts) * 100;
    }
    this.gamesPlayedElement = document.getElementById('games-played');
    this.accuracyElement = document.getElementById('accuracy');
    this.attemptsElement = document.getElementById('attempts');
    this.accuracyElement.innerHTML = this.accuracy.toPrecision(4) + '%';
    this.attemptsElement.innerHTML = this.attempts;
    this.gamesPlayedElement.innerHTML = this.gamesPlayed;
  }

  resetGuesses() {
    this.firstCard = '';
    this.secondCard = '';
    this.count = 0;
    this.flippedCards = [];
    this.updateStats();
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
    this.gameArea.setAttribute('id', 'game-area');
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
    for (let i = 0; i < 16; i++) {
      this.cardRow = document.createElement('div');
      this.cardRow.classList.add('game-area__row');
      this.gameArea.appendChild(this.cardRow);
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
