import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'tv.danmaku.bili',
  name: '哔哩哔哩',
  groups: [
    {
      key: 1,
      name: '全屏广告-青少年弹窗',
      desc: '点击[我知道了]',
      rules: [
        {
          fastQuery: true,
          activityIds: [
            'com.bilibili.teenagersmode.ui.TeenagersModeDialogActivity',
          ],
          matches: ['[id="tv.danmaku.bili:id/button"]', '[text="我知道了"]'],
          snapshotUrls: ['https://i.gkd.li/i/21187537'],
        },
      ],
    },
  ],
});
