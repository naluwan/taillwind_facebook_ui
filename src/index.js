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
      imgURL:
        'https://scontent-tpe1-1.xx.fbcdn.net/v/t39.30808-6/317811309_5442004795926380_4743840999032164787_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=emeTdx9S2FkAX_Tq3uh&_nc_ht=scontent-tpe1-1.xx&oh=00_AfAIojHEpJlCf33ZxnXEziqgCOrR5NxR3GcWO8vVwuzkdQ&oe=643E881B',
    },
    {
      name: 'Shane Lin',
      imgURL:
        'https://scontent-tpe1-1.xx.fbcdn.net/v/t39.30808-6/245342708_5052225001455280_3427608857536564216_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=J5DR4aGFndoAX__qezt&_nc_ht=scontent-tpe1-1.xx&oh=00_AfBU9wxbZnmidlaVCKCj0ylgEV8-jxfMZAmbUewe78gsEQ&oe=643D9BD2',
    },
    {
      name: 'Carmelo Kuo',
      imgURL:
        'https://scontent-tpe1-1.xx.fbcdn.net/v/t1.6435-9/188870233_4160305537369027_6659643968968492305_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ELHPqSs4TBIAX_uPrSM&_nc_ht=scontent-tpe1-1.xx&oh=00_AfCR-SutHa09EDbcw-cktxIKRFT89qFkkL9oL2d2GH3dGw&oe=64607BBC',
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
    imgUrl:
      'https://scontent.ftpe14-1.fna.fbcdn.net/v/t39.30808-6/341554864_553947350213146_6829164000854767559_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5b7eaf&_nc_ohc=a7iXIuozIlgAX-ohALG&_nc_ht=scontent.ftpe14-1.fna&oh=00_AfCJzwrrWjQHqt_CKX9zpkPTolmZp1rsg40e4DiuxaMbGA&oe=6440DB0D',
    name: 'Nonna',
  },
  {
    nickName: 'N',
    imgUrl:
      'https://scontent.ftpe14-1.fna.fbcdn.net/v/t39.30808-6/341252250_5962912637137567_4064351953620710735_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5b7eaf&_nc_ohc=xdomJZAfVtAAX9qTXeo&_nc_ht=scontent.ftpe14-1.fna&oh=00_AfAu4yvea5w2R2PyHbXcwF59waGedQuyavFp0k5lAdWeig&oe=64405030',
    name: 'Naomi Chen',
  },
  {
    nickName: 'E',
    imgUrl:
      'https://scontent.ftpe14-1.fna.fbcdn.net/v/t39.30808-6/341183651_1188412618513761_4660501756852229241_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5b7eaf&_nc_ohc=uKiD94fSGNAAX_sc_kA&_nc_ht=scontent.ftpe14-1.fna&oh=00_AfCboYU-rGBDCoVVFB-Wu94YdDixxspXAMYCeI5Ipg6qlg&oe=64413960',
    name: 'Eric Chang',
  },
  {
    nickName: 'S',
    imgUrl:
      'https://scontent.ftpe14-1.fna.fbcdn.net/v/t39.30808-6/341327118_728939478926394_1253322147111460141_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5b7eaf&_nc_ohc=HSE09UsMMnwAX9Q3b05&_nc_ht=scontent.ftpe14-1.fna&oh=00_AfD_TpuWk3E3pnD1edSY38QfyEmr261t9UVM4lguy2nw_g&oe=64403065',
    name: 'Shane Lin',
  },
  {
    nickName: 'C',
    imgUrl:
      'https://scontent.ftpe14-1.fna.fbcdn.net/v/t39.30808-6/341218539_988715502487248_2169563022744842252_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5b7eaf&_nc_ohc=SmH9bnzl6DwAX8VlVs8&_nc_ht=scontent.ftpe14-1.fna&oh=00_AfCMv7ZSZ_3lGGjfh2K5qoz52V5r_WMkXLDRvkV7wfHLHw&oe=643FC37F',
    name: 'Carmelo Kuo',
  },
];

const renderStoryItem = (idx, nickName, imgUrl, name) => {
  const divBox = document.createElement('div');
  divBox.classList.add('min-w-[120px]', 'flex-1', 'cursor-pointer', 'px-[4px]');

  divBox.innerHTML = `
    <div class="relative overflow-hidden" id="story-${idx}">
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
