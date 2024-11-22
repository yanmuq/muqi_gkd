import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jsmcc',
  name: '中国移动江苏',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          matches: 'FrameLayout[vid="wel_jump_btn"]',
          snapshotUrls: 'https://i.gkd.li/i/16372899',
        },
      ],
    },
    {
      key: 1,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          matches: '[id="com.jsmcc:id/cancelVersionTV"]',
          snapshotUrls: 'https://i.gkd.li/i/13327322',
        },
      ],
    },
    {
      key: 2,
      name: '通知提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          action: 'back',
          matches: 'ImageView[vid="notice_dia"]',
          snapshotUrls: 'https://i.gkd.li/i/16215987',
        },
      ],
    },
  ],
});
