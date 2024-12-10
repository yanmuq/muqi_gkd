import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.vivo.wallet',
  name: '钱包',
  groups: [
    {
      key: 1,
      name: '通知提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.bookkeep.activity.BookKeepMainActivity',
          matches: '@[clickable=true] > [text="取消"]',
          snapshotUrls: 'https://i.gkd.li/i/13440881',
        },
      ],
    },
  ],
});
