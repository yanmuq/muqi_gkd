import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'ai.ling.luka.app',
  name: 'Luka阅读养成',
  groups: [
    {
      key: 1,
      name: '通知提示',
      desc: '点击[取消]',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: ['[text="通知服务未开启"]', '[text="取消"]'],
          snapshotUrls: 'https://i.gkd.li/i/15796616',
        },
      ],
    },
  ],
});
