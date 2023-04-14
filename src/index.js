import './index.css';

// ------------ panel ------------
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

// ------------ left info ------------
const leftBlock = document.querySelector('#left-block');

const renderLeftItem = (name, imgURL) => {
  const item = `
    <div
      class="mb-1 flex w-full cursor-pointer items-center justify-items-center rounded p-2 hover:bg-fb-input"
    >
      <div class="mr-4 w-[32px] overflow-hidden rounded-full">
        <img
          src="${imgURL}"
          alt="avator"
        />
      </div>
      <p class="text-[.9rem] text-white">${name}</p>
    </div>
  `;
  return item;
};

const renderLeftBlock = () => {
  let htmlStr = ``;
  const itemsArr = [
    {
      name: 'NaLuWan',
      imgURL:
        'https://scontent-tpe1-1.xx.fbcdn.net/v/t1.18169-9/11041222_10200550271996379_660296663182509208_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=174925&_nc_ohc=jWEPCBcqcpcAX_NVCLj&_nc_oc=AQkeytsqIXS73l1WzgQiaPj6Xe_bgHiT39rJeHRW4bkyUCsGRvwNEgc6PZSG5YMwLpI&_nc_ht=scontent-tpe1-1.xx&oh=00_AfADEJAWwN8axrH6WxojsVQC3HsZx82sfN7x9NYncofmXw&oe=645F1669',
    },
    {
      name: '活動',
      imgURL: 'https://bruce-fe-fb.web.app/image/left/activity.svg',
    },
    {
      name: '天氣',
      imgURL: 'https://bruce-fe-fb.web.app/image/left/cloudy.png',
    },
    {
      name: '災害應變中心',
      imgURL: 'https://bruce-fe-fb.web.app/image/left/dynamic.svg',
    },
    {
      name: '新冠病毒資訊中心',
      imgURL: 'https://bruce-fe-fb.web.app/image/left/facemask.svg',
    },
    {
      name: '社團',
      imgURL: 'https://bruce-fe-fb.web.app/image/left/friend.svg',
    },
    {
      name: '企業管理平台',
      imgURL: 'https://bruce-fe-fb.web.app/image/left/job.png',
    },
    {
      name: 'Messenger',
      imgURL: 'https://bruce-fe-fb.web.app/image/left/messenger.svg',
    },
    {
      name: '近期廣告動態',
      imgURL: 'https://bruce-fe-fb.web.app/image/left/pay.png',
    },
    {
      name: '朋友名單',
      imgURL: 'https://bruce-fe-fb.web.app/image/left/sale.png',
    },
    {
      name: '最愛',
      imgURL: 'https://bruce-fe-fb.web.app/image/left/star.svg',
    },
    {
      name: 'Marketplace',
      imgURL: 'https://bruce-fe-fb.web.app/image/left/store.svg',
    },
    {
      name: 'Watch',
      imgURL: 'https://bruce-fe-fb.web.app/image/left/watchingTv.svg',
    },
  ];

  itemsArr.forEach((item) => {
    const { name, imgURL } = item;
    htmlStr += renderLeftItem(name, imgURL);
  });

  leftBlock.innerHTML = htmlStr;
};

renderLeftBlock();
