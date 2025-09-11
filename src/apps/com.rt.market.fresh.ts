import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.rt.market.fresh',
  name: '大润发优鲜',
  groups: [
    {
      key: 1,
      name: '提示类',
      desc: '点击[开启定位]',
      matchTime: 10000,
      actionMaximum: 2,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: '.home.activity.MainActivity',
          matches: ['[vid="tv_fm_home_permission_start"]', '[text="开启定位"]'],
          snapshotUrls: ['https://i.gkd.li/i/22227999'],
          exampleUrls: 'https://e.gkd.li/618ed0e0-a40c-4612-8521-1c6640e50d47',
        },
      ],
    },
  ],
});
