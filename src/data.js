import React from 'react';
import Assessment from 'material-ui/svg-icons/action/assessment';
import GridOn from 'material-ui/svg-icons/image/grid-on';
import PermIdentity from 'material-ui/svg-icons/action/perm-identity';
import Web from 'material-ui/svg-icons/av/web';
import {cyan600, pink600, purple600} from 'material-ui/styles/colors';
import ExpandLess from 'material-ui/svg-icons/navigation/expand-less';
import ExpandMore from 'material-ui/svg-icons/navigation/expand-more';
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right';

const data = {
  menus: [
    { text: 'ダッシュボード', icon: <Assessment/>, link: '/dashboard' },
    { text: '通知作成', icon: <Web/>, link: '/form' },
    { text: 'ユーザー一覧', icon: <GridOn/>, link: '/table' },
    { text: 'ログイン', icon: <PermIdentity/>, link: '/login' }
  ],
  tablePage: {
    items: [
      {id: 1, name: '田中みよこ', price: '15', category: '女性モデル'},
      {id: 2, name: '松原さちえ', price: '0', category: '男性モデル'},
      {id: 3, name: '遠藤ほまれ', price: '0', category: '女性モデル'},
      {id: 4, name: '芥川龍子', price: '7', category: 'フォトグラファー'},
      {id: 5, name: '恵比寿よしこ', price: '5', category: '女性モデル'},
      {id: 6, name: '高橋ようこ', price: '95', category: '女性モデル'},
      {id: 7, name: '斎藤たいこ', price: '55', category: 'ディレクター'},
      {id: 8, name: '田中みよこ', price: '15', category: '女性モデル'},
      {id: 9, name: '松原さちえ', price: '0', category: '男性モデル'},
      {id: 10, name: '遠藤ほまれ', price: '0', category: '女性モデル'},
      {id: 11, name: '芥川龍子', price: '7', category: 'フォトグラファー'},
      {id: 12, name: '恵比寿よしこ', price: '5', category: '女性モデル'},
      {id: 13, name: '高橋ようこ', price: '95', category: '女性モデル'},
      {id: 14, name: '斎藤たいこ', price: '55', category: 'ディレクター'},
      {id: 15, name: '中森明子', price: '7', category: '女性モデル'}
    ]
  },
  dashBoardPage: {
    recentProducts: [
      {id: 1, title: 'Samsung TV', text: 'Samsung 32 1080p 60Hz LED Smart HDTV.'},
      {id: 2, title: 'Playstation 4', text: 'PlayStation 3 500 GB System'},
      {id: 3, title: 'Apple iPhone 6', text: 'Apple iPhone 6 Plus 16GB Factory Unlocked GSM 4G '},
      {id: 4, title: 'Apple MacBook', text: 'Apple MacBook Pro MD101LL/A 13.3-Inch Laptop'}
    ],
    monthlySales: [
      {name: 'Jan', uv: 3700},
      {name: 'Feb', uv: 3000},
      {name: 'Mar', uv: 2000},
      {name: 'Apr', uv: 2780},
      {name: 'May', uv: 2000},
      {name: 'Jun', uv: 1800},
      {name: 'Jul', uv: 2600},
      {name: 'Aug', uv: 2900},
      {name: 'Sep', uv: 3500},
      {name: 'Oct', uv: 3000},
      {name: 'Nov', uv: 2400},
      {name: 'Dec', uv: 2780}
    ],
    newOrders: [
      {pv: 2400},
      {pv: 1398},
      {pv: 9800},
      {pv: 3908},
      {pv: 4800},
      {pv: 3490},
      {pv: 4300}
    ],
    browserUsage: [
      {name: 'Chrome', value: 800, color: cyan600, icon: <ExpandMore/>},
      {name: 'Firefox', value: 300, color: pink600, icon: <ChevronRight/>},
      {name: 'Safari', value: 300, color: purple600, icon: <ExpandLess/>}
    ]
  }
};

export default data;
