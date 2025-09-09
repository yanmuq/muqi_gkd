import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.rt.market.fresh',
  name: '大润发优鲜',
  groups: [
    {
      key: 1,
      name: '提示类',
      desc: '点击[开启定位]',
      matchTime: 5000,
      actionMaximum: 2,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: '.home.activity.MainActivity',
          matches: ['[vid="tv_fm_home_permission_start"]', '[text="开启定位"]'],
          snapshotUrls: ['https://i.gkd.li/i/22227999'],
        },
      ],
    },
  ],
});
