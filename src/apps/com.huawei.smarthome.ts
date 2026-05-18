import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.huawei.smarthome',
  name: '华为智慧生活',
  groups: [
    {
      key: 0,
      name: '局部广告-首页横幅',
      desc: '点击关闭',
      fastQuery: true,
      matchTime: 5000,
      actionMaximum: 1,
      resetMatch: 'app',
      actionCd: 86400000,
      rules: [
        {
          matches: '[vid="image_feed_banner_close_btn"]',
          snapshotUrls: 'https://i.gkd.li/i/27942071',
        },
      ],
    },
  ],
});
