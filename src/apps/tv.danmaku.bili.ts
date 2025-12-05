import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'tv.danmaku.bili',
  name: '哔哩哔哩',
  groups: [
    {
      key: 1,
      name: '青少年弹窗',
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
      name: '全屏广告-推荐弹窗',
      desc: '点击[返回]',
      fastQuery: true,
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
