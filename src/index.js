import './index.css';

const plusBtn = document.querySelector('#plus-btn');
const msgBtn = document.querySelector('#msg-btn');
const notificationBtn = document.querySelector('#notification-btn');
const moreBtn = document.querySelector('#more-btn');

const plusPanel = document.querySelector('#plus-panel');
const msgPanel = document.querySelector('#msg-panel');
const notificationPanel = document.querySelector('#notification-panel');
const morePanel = document.querySelector('#more-panel');

const btns = [plusBtn, msgBtn, notificationBtn, moreBtn];

const panels = [plusPanel, msgPanel, notificationPanel, morePanel];

const openPanel = (index) => {
  panels.forEach((panel, idx) => {
    if (index === idx) {
      panel.classList.toggle('hidden');
      return;
    }

    if (panel.classList.contains('hidden')) {
      return;
    }

    panel.classList.add('hidden');
  });
};

window.addEventListener('click', () => {
  // panels.forEach((panel) => panel.classList.add('hidden'));
  // 由於沒有-1這個idx，所以傳入後，只有後面兩個判斷會被觸發，所以等於一定會將所有panel隱藏
  openPanel(-1);
});

btns.forEach((btn, idx) => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    openPanel(idx);
  });
});

panels.forEach((panel) => {
  panel.addEventListener('click', (e) => {
    e.stopPropagation();
  });
});
