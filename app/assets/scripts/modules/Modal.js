import GameArea from './GameArea';

class Modal {
	constructor() {
		this.injectHtml();
		this.modal = document.querySelector('.modal');
		this.startBtn = document.querySelector('.modal__start-btn');
		this.events();
		document.onload = this.openTheModal();
	}

	injectHtml() {
		document.body.insertAdjacentHTML(
			'beforeend',
			`
    <div class="modal">
    <div class="modal__inner">
      <h2
        class="game-title game-title--less-margin"
      >
        Help R2D2 Remember
      </h2>
      <div class="wrapper wrapper--narrow">
        <button class="modal__start-btn">Start</button>
      </div>
    </div>
  </div>
    `
		);
	}

	events() {
		this.startBtnHandler = this.closeTheModal.bind(this);
		this.startBtn.addEventListener('click', this.startBtnHandler, false);
	}

	openTheModal() {
		this.modal.classList.add('modal--is-visible');
	}

	closeTheModal() {
		var startSound = document.getElementById('start-sound');
		startSound.play();
		var bgMusic = document.getElementById('background_music');
		bgMusic.play();
		this.modal.classList.remove('modal--is-visible');
		new GameArea();
		this.startBtn.removeEventListener('click', this.startBtnHandler, false);
	}
}

export default Modal;
