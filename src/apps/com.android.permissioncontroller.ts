import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.android.permissioncontroller',
  name: '权限控制器',
  groups: [{
      name: '功能类-权限控制弹窗',
      key: 1,
      fastQuery: true,
      matchRoot: true,
      actionMaximum: 1,
      priorityTime: 8000,
      order: -10,
      matchDelay: 300,
      matchTime: 3000,
      resetMatch: 'app',
      rules: [
        {
          matches: [
           '[vid="permission_message"][text$="访问相机？"]',
           '[vid="permission_allow_one_time_button"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/18153202',
            'https://i.gkd.li/i/18154250',
          ],          
        },
      ],
    },
  ],
});
