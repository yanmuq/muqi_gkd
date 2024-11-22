import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.hd.smartVillage',
  name: '恒大智慧社区',
  groups: [
    {
      key: 1,
      name: '通知提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: 'View[id="com.hd.smartVillage:id/notificationSettingCloseBtn"]',
      snapshotUrls: [
        'https://i.gkd.li/i/13223669',
        'https://i.gkd.li/i/13293000',
      ],
    },
    {
      key: 2,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules:
        'TextView[id="com.hd.smartVillage:id/tv_upgrade_cancel"][text="取消"]',
      snapshotUrls: 'https://i.gkd.li/i/13223642',
    },
  ],
});
