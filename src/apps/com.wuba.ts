import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.wuba',
  name: '58同城',
  groups: [
    {
      key: 2,
      name: '更新提示',
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          action: 'back',
          matches: 'Button[text="立即更新"]',
          snapshotUrls: 'https://i.gkd.li/i/15321533',
        },
      ],
    },
  ],
});
