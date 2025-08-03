import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.microsoft.emmx',
  name: 'Edge',
  groups: [
    {
      key: 0,
      name: '全屏广告-开启通知弹窗',
      matchTime: 5000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
        {
          activityIds: 'org.chromium.chrome.browser.ChromeTabbedActivity',
          matches: 'ViewGroup > Button[text="不，谢谢"]',
          snapshotUrls: 'https://i.gkd.li/i/13646187',
        },
      ],
    },
  ],
});
