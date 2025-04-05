import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.meizu.media.music',
  name: 'QQ音乐flyme版',
  groups: [
    {
      name: '权限申请-存储权限弹窗',
      key: 0,
      enable: true,
      fastQuery: true,
      matchRoot: true,
      actionMaximum: 1,
      priorityTime: 5000,
      order: -10,
      matchDelay: 10,
      matchTime: 5000,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '[vid="tv_content"][text$="存储空间)权限"]',
            '[vid="btn_negative"]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/18945676',
          exampleUrls: 'https://e.gkd.li/158a00b8-48fe-4556-a844-02e3d8800f47',
        },
      ],
    },
  ],
});
