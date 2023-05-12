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

// ------------ right info ------------
const rightBlock = document.querySelector('#right-block');

const renderRightItem = (name, imgURL) => {
  const item = `
    <div
      class="flex w-full cursor-pointer items-center justify-items-center rounded px-1 py-2 hover:bg-fb-input"
    >
      <div class="w-[45px]">
        <div class="relative w-[32px] cursor-pointer">
          <div class="h-[32px] w-[32px] overflow-hidden rounded-full">
            <img
              src="${imgURL}"
              alt="avator"
              class="h-full w-full object-cover"
            />
          </div>
          <div
            class="absolute bottom-0 right-0 h-[8px] w-[8px] rounded-full bg-green-500 ring ring-gray-900"
          ></div>
        </div>
      </div>
      <p class="text-[.9rem] text-white">${name}</p>
    </div>
  `;
  return item;
};

const renderRightBlock = () => {
  let htmlStr = `<p class="mb-2 text-lg text-gray-400">聯絡人</p>`;

  const itemsArr = [
    { name: 'Nonna', imgURL: 'https://i.imgur.com/tQcTOLH.jpg' },
    {
      name: 'Naomi Chen',
      imgURL:
        'https://scontent-tpe1-1.xx.fbcdn.net/v/t1.6435-9/65873280_2568412379835598_4929082980615323648_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=TgX5JNz4HIgAX-o5EPl&_nc_ht=scontent-tpe1-1.xx&oh=00_AfAzNyoTMjD4Q5h_7xYaVAuiicIWrNsiZBfdZdfICSojaQ&oe=64608416',
    },
    {
      name: 'Eric Chang',
      imgURL: 'https://i.imgur.com/wBaUZDr.jpg',
    },
    {
      name: 'Shane Lin',
      imgURL: 'https://i.imgur.com/eNrWvUo.jpg',
    },
    {
      name: 'Carmelo Kuo',
      imgURL:
        'https://scontent-tpe1-1.xx.fbcdn.net/v/t1.6435-9/188870233_4160305537369027_6659643968968492305_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ELHPqSs4TBIAX_uPrSM&_nc_ht=scontent-tpe1-1.xx&oh=00_AfCR-SutHa09EDbcw-cktxIKRFT89qFkkL9oL2d2GH3dGw&oe=64607BBC',
    },
    {
      name: 'Michael Jordan',
      imgURL: 'https://cdn-japantimes.com/wp-content/uploads/2022/12/np_file_199358-scaled.jpeg',
    },
    {
      name: 'Kobe Bryant',
      imgURL:
        'https://scontent-tpe1-1.xx.fbcdn.net/v/t1.18169-9/13177146_10154154195750419_4907503626014205768_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=gwkFl-F0UvkAX9SzFA5&_nc_ht=scontent-tpe1-1.xx&oh=00_AfAUR0uET6dVtuO4tdoLSZScdXdw_IXVR1RKv3XDHKH5UA&oe=64855F6B',
    },
    {
      name: "Shaquille O'Neal",
      imgURL:
        'https://www.al.com/resizer/HaDHp8bDFt4qZo5JkmFURH-i9JA=/1280x0/smart/arc-anglerfish-arc2-prod-advancelocal.s3.amazonaws.com/public/E7TJQAUUNZEBLDPKJ7AJAZ7ZYE.jpg',
    },
    {
      name: 'Carmelo Anthony',
      imgURL: 'https://pbs.twimg.com/profile_images/1336430445383327745/kMWB9JJ9_400x400.jpg',
    },
    {
      name: 'LeBron James',
      imgURL:
        'https://lalweb.blob.core.windows.net/public/lakers/product-marketing/web/player-page/2022-2023/2223_PlayerImage_James_1920x2304.jpg',
    },
    {
      name: 'P.J. Tucker',
      imgURL: 'https://thesixersense.com/wp-content/uploads/imagn-images/2017/07/19122294.jpeg',
    },
    {
      name: 'Bronny James',
      imgURL:
        'https://s.yimg.com/ny/api/res/1.2/V8wuk9ydVZanWtzAB1y5qA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQ2Nw--/https://s.yimg.com/os/creatr-uploaded-images/2023-05/db2ea060-ed86-11ed-bedf-09d237b49f41',
    },
    {
      name: 'Ja Morant',
      imgURL:
        'https://imageio.forbes.com/specials-images/imageserve/639a0b01d48c81866c79bb22/0x0.jpg?format=jpg&crop=1920,1080,x0,y0,safe&width=1200',
    },
    {
      name: 'Luck Doncic',
      imgURL: 'https://pbs.twimg.com/media/Fhs8JSZakAAk0m9.jpg:large',
    },
    {
      name: 'Nikola Jokic',
      imgURL:
        'https://www.nbcsports.com/sites/rsnunited/files/article/hero/getty-nikola-jokic-15.jpg',
    },
    {
      name: 'Giannis Antetokounmpo',
      imgURL:
        'https://i0.wp.com/clutch.hk/wp-content/uploads/2018/08/Giannis-20180811.png?fit=1040%2C700&ssl=1',
    },
  ];

  itemsArr.forEach((item) => {
    const { name, imgURL } = item;
    htmlStr += renderRightItem(name, imgURL);
  });

  rightBlock.innerHTML = htmlStr;
};

renderRightBlock();

// ------------ 限時動態 ------------
const storyList = document.querySelector('#story-list');
const storyItems = [
  {
    nickName: 'N',
    imgUrl: 'https://i.imgur.com/cUcpgWv.jpg',
    name: 'Nonna',
  },
  {
    nickName: 'N',
    imgUrl: 'https://i.imgur.com/nMbMdeV.jpg',
    name: 'Naomi Chen',
  },
  {
    nickName: 'E',
    imgUrl: 'https://i.imgur.com/wBaUZDr.jpg',
    name: 'Eric Chang',
  },
  {
    nickName: 'S',
    imgUrl: 'https://i.imgur.com/HT4ERfW.jpg5',
    name: 'Shane Lin',
  },
  {
    nickName: 'C',
    imgUrl: 'https://i.imgur.com/Y1jk5GQ.jpg',
    name: 'Carmelo Kuo',
  },
];

const renderStoryItem = (idx, nickName, imgUrl, name) => {
  const divBox = document.createElement('div');
  divBox.classList.add('min-w-[120px]', 'flex-1', 'cursor-pointer', 'px-[4px]');

  divBox.innerHTML = `
    <div class="relative overflow-hidden rounded-xl" id="story-${idx}">
      <div id="story-mask-${idx}" class="hidden absolute w-full h-full top-0 left-0 bg-black/20 z-20"></div>
      <div
        class="absolute left-4 top-4 flex h-[32px] w-[32px] items-center justify-center rounded-full bg-fb-card ring-4 ring-fb z-30"
      >
        <p class="text-sm text-white">${nickName}</p>
      </div>
      <div
        class="absolute left-0 top-0 h-full w-full bg-gradient-to-b from-black/30 to-transparent z-20"
      ></div>
      <img
        id="story-img-${idx}"
        class="h-full w-full duration-200"
        src="${imgUrl}"
      />
      <p class="absolute bottom-2 left-2 text-white">${name}</p>
    </div>
  `;

  storyList.appendChild(divBox);

  // hover時，增加遮罩和放大1.05倍
  divBox.addEventListener('mouseover', () => {
    const storyMask = document.querySelector(`#story-mask-${idx}`);
    const storyImg = document.querySelector(`#story-img-${idx}`);

    storyMask.classList.remove('hidden');
    storyImg.classList.add('scale-105');
  });

  // blur時，移除遮罩和恢復原大小
  divBox.addEventListener('mouseout', () => {
    const storyMask = document.querySelector(`#story-mask-${idx}`);
    const storyImg = document.querySelector(`#story-img-${idx}`);

    storyMask.classList.add('hidden');
    storyImg.classList.remove('scale-105');
  });
};

storyItems.forEach((storyItem, idx) => {
  const { nickName, imgUrl, name } = storyItem;
  renderStoryItem(idx, nickName, imgUrl, name);
});

// ------------ 輪播包廂 ------------

const renderLiveItem = () => {
  const itemsArr = [
    {
      name: 'NaLuWan',
      imgURL:
        'https://scontent.ftpe14-1.fna.fbcdn.net/v/t1.18169-9/23519066_10203611914895538_2510838889747618336_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a4a2d7&_nc_ohc=k8ag7FwXSPsAX99oRkc&_nc_ht=scontent.ftpe14-1.fna&oh=00_AfBYiMXRiDMjpGj73I1z2AxxDcrBVLDQ8sOYFk8_LCHaEQ&oe=6462FF80',
    },
    { name: 'Nonna', imgURL: 'https://i.imgur.com/tQcTOLH.jpg' },
    {
      name: 'Naomi Chen',
      imgURL:
        'https://scontent-tpe1-1.xx.fbcdn.net/v/t1.6435-9/65873280_2568412379835598_4929082980615323648_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=TgX5JNz4HIgAX-o5EPl&_nc_ht=scontent-tpe1-1.xx&oh=00_AfAzNyoTMjD4Q5h_7xYaVAuiicIWrNsiZBfdZdfICSojaQ&oe=64608416',
    },
    {
      name: 'Eric Chang',
      imgURL: 'https://i.imgur.com/wBaUZDr.jpg',
    },
    {
      name: 'Shane Lin',
      imgURL: 'https://i.imgur.com/eNrWvUo.jpg',
    },
    {
      name: 'Carmelo Kuo',
      imgURL:
        'https://scontent-tpe1-1.xx.fbcdn.net/v/t1.6435-9/188870233_4160305537369027_6659643968968492305_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ELHPqSs4TBIAX_uPrSM&_nc_ht=scontent-tpe1-1.xx&oh=00_AfCR-SutHa09EDbcw-cktxIKRFT89qFkkL9oL2d2GH3dGw&oe=64607BBC',
    },
    {
      name: 'Michael Jordan',
      imgURL: 'https://cdn-japantimes.com/wp-content/uploads/2022/12/np_file_199358-scaled.jpeg',
    },
    {
      name: 'Kobe Bryant',
      imgURL:
        'https://scontent-tpe1-1.xx.fbcdn.net/v/t1.18169-9/13177146_10154154195750419_4907503626014205768_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=gwkFl-F0UvkAX9SzFA5&_nc_ht=scontent-tpe1-1.xx&oh=00_AfAUR0uET6dVtuO4tdoLSZScdXdw_IXVR1RKv3XDHKH5UA&oe=64855F6B',
    },
    {
      name: "Shaquille O'Neal",
      imgURL:
        'https://www.al.com/resizer/HaDHp8bDFt4qZo5JkmFURH-i9JA=/1280x0/smart/arc-anglerfish-arc2-prod-advancelocal.s3.amazonaws.com/public/E7TJQAUUNZEBLDPKJ7AJAZ7ZYE.jpg',
    },
    {
      name: 'Carmelo Anthony',
      imgURL: 'https://pbs.twimg.com/profile_images/1336430445383327745/kMWB9JJ9_400x400.jpg',
    },
    {
      name: 'LeBron James',
      imgURL:
        'https://lalweb.blob.core.windows.net/public/lakers/product-marketing/web/player-page/2022-2023/2223_PlayerImage_James_1920x2304.jpg',
    },
    {
      name: 'P.J. Tucker',
      imgURL: 'https://thesixersense.com/wp-content/uploads/imagn-images/2017/07/19122294.jpeg',
    },
    {
      name: 'Bronny James',
      imgURL:
        'https://s.yimg.com/ny/api/res/1.2/V8wuk9ydVZanWtzAB1y5qA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQ2Nw--/https://s.yimg.com/os/creatr-uploaded-images/2023-05/db2ea060-ed86-11ed-bedf-09d237b49f41',
    },
    {
      name: 'Ja Morant',
      imgURL:
        'https://imageio.forbes.com/specials-images/imageserve/639a0b01d48c81866c79bb22/0x0.jpg?format=jpg&crop=1920,1080,x0,y0,safe&width=1200',
    },
    {
      name: 'Luck Doncic',
      imgURL: 'https://pbs.twimg.com/media/Fhs8JSZakAAk0m9.jpg:large',
    },
    {
      name: 'Nikola Jokic',
      imgURL:
        'https://www.nbcsports.com/sites/rsnunited/files/article/hero/getty-nikola-jokic-15.jpg',
    },
    {
      name: 'Giannis Antetokounmpo',
      imgURL:
        'https://i0.wp.com/clutch.hk/wp-content/uploads/2018/08/Giannis-20180811.png?fit=1040%2C700&ssl=1',
    },
  ];

  itemsArr.forEach((item) => {
    const { imgURL } = item;
    renderSlideItem(imgURL);
  });

  new Swiper('.fb-live', {
    slidesPerView: 'auto',
    loop: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
};

const renderSlideItem = (url) => {
  const swiperWrapperLive = document.querySelector('#swiper-wrapper-live');
  const divBox = document.createElement('div');
  divBox.classList.add('swiper-slide');

  const html = `
    <div class="w-[55px]">
      <div class="relative w-[40px] cursor-pointer">
        <div class=" h-[40px] w-[40px] overflow-hidden rounded-full">
          <img
            src="${url}"
            alt="avatar"
            class="h-full w-full object-cover"
          />
        </div>
        <div
          class="absolute bottom-0 right-0 h-[10px] w-[10px] rounded-full bg-green-500 ring ring-gray-900"
        ></div>
      </div>
    </div>
  `;

  divBox.innerHTML = html;

  swiperWrapperLive.appendChild(divBox);
};

renderLiveItem();
