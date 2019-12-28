import '../styles/styles.css';
import Modal from './modules/Modal';
import Stats from './modules/Stats';

new Modal();
new Stats();

if (module.hot) {
  module.hot.accept();
}
