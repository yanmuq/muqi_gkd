import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'tv.danmaku.bili',
  name: '哔哩哔哩',
  groups: [
    {
      key: 1,
      name: '青少年弹窗',
      desc: '点击[不再提醒]',
      rules: [
        {
          fastQuery: true,
          activityIds: [
            'com.bilibili.teenagersmode.ui.TeenagersModeDialogActivity',
          ],
          matches: ['[id="tv.danmaku.bili:id/button"]', '[text="不再提醒"]'],
          snapshotUrls: ['https://i.gkd.li/i/23958306'],
        },
      ],
    },
    //{
     // key: 2,
     // name: '全屏广告-推荐弹窗',
    //  desc: '点击[返回]',
     // rules: [
     //   {
    //      fastQuery: true,
    //      activityIds: [
     //       '.MainActivityV2',
     //     ],
     //     matches: ['[id="tv.danmaku.bili:id/title"]', '[text="完善信息，获取精准推荐"]'],
     //     snapshotUrls: ['https://i.gkd.li/i/23958344'],
     //   },
      ],
    },
  ],
});
