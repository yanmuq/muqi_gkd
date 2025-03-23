import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.android.permissioncontroller',
  name: '权限控制器',
  groups: [
    {
      name: '功能类-相机允许本次',
      key: 1,
      fastQuery: true,
      matchRoot: true,
      actionMaximum: 1,
      priorityTime: 8000,
      order: -10,
      matchDelay: 400,
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
    {
      name: '功能类-位置允许本次',
      key: 2,
      fastQuery: true,
      matchRoot: true,
      actionMaximum: 1,
      priorityTime: 8000,
      order: -10,
      matchDelay: 1000,
      matchTime: 3000,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '[vid="permission_message"][text$="位置信息？"]',
            '[vid="permission_allow_one_time_button"]',
          ],
          exampleUrls: 'https://e.gkd.li/c2343f5d-459a-45e5-aefc-3a917bb6c693',
          snapshotUrls: [
            'https://i.gkd.li/i/19408178',
            
          ],
        },
      ],
    },
  ],
});
