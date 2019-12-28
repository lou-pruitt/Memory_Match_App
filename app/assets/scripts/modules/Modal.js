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
        Memory Match
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
    this.startBtn.addEventListener('click', () => this.closeTheModal());
  }

  openTheModal() {
    this.modal.classList.add('modal--is-visible');
  }

  closeTheModal() {
    this.modal.classList.remove('modal--is-visible');
  }
}

export default Modal;
