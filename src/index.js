import './index.css';

const render = () => {
  import(`./assets/css/sass/main.scss`).then(() => {
    require('./AppRenderer');
  });
};
render();
