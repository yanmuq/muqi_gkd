import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.midea.vm.washer',
  name: 'U净',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text*="跳过"][text.length<=10]',
      snapshotUrls: 'https://i.gkd.li/import/13407199',
    },
  ],
});
