import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.microsoft.emmx',
  name: 'Edge',
  groups: [
    {
      key: 0,
      name: '提示类-开启通知弹窗',
      matchTime: 5000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
        {
          activityIds: 'org.chromium.chrome.browser.ChromeTabbedActivity',
          matches: 'ViewGroup > Button[text="不，谢谢"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13646187',
            'https://i.gkd.li/i/21564662',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '全屏广告-评价弹窗',
      desc: '关闭弹出窗口',
      matchTime: 5000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
        {
          fastQuery: true,
          activityIds: 'org.chromium.chrome.browser.ChromeTabbedActivity',
          matches: 'ImageView[vid="title_bar_dismiss_button"]',
          snapshotUrls: 'https://i.gkd.li/i/22277907',
          exampleUrls: 'https://e.gkd.li/51c0e6de-cc7a-4d5a-8163-17a141a566fc',
        },
      ],
    },
  ],
});
