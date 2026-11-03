import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'tv.danmaku.bili',
  name: '哔哩哔哩',
  groups: [
    {
      key: 0,
      name: '限时-应用提示-兴趣推荐',
      enable: true,
      desc: '点击[返回]',
      fastQuery: true,
      matchTime: 20000,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.MainActivityV2',
          matches: ['[vid="title"]', '[text^="选择兴趣"]'],
          action: 'back',
          snapshotUrls: ['https://i.gkd.li/i/23958344'],
        },
      ],
    },
    {
      key: 1,
      name: '持续-应用提示弹窗-青少年弹窗',
      enable: false,
      desc: '点击[不再提醒]',
      fastQuery: true,
      rules: [
        {
          activityIds:
            'com.bilibili.teenagersmode.ui.TeenagersModeDialogActivity',
          matches: ['[id="tv.danmaku.bili:id/button"]', '[text="不再提醒"]'],
          snapshotUrls: ['https://i.gkd.li/i/23958306'],
          exampleUrls: 'https://e.gkd.li/99565077-80e9-4e4f-98e7-33da742e2afd',
        },
      ],
    },
    {
      key: 2,
      name: '限时-应用提示-完善信息弹窗',
      enable: true,
      desc: '点击[返回]',
      fastQuery: true,
      matchTime: 20000,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: '.MainActivityV2',
          matches: ['[id="tv.danmaku.bili:id/title"]', '[text^="完善信息"]'],
          action: 'back',
          snapshotUrls: ['https://i.gkd.li/i/23958344'],
        },
      ],
    },
  ],
});
