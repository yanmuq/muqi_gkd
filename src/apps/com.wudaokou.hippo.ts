import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.wudaokou.hippo',
  name: '盒马',
  groups: [
    {
      key: 1,
      name: '全屏广告-更新弹窗',
      rules: [
        {
          fastQuery: true,
          activityIds: '.launcher.splash.SplashActivity',
          matches: '[vid="update_imageview_cancel_v2"]',
          exampleUrls: 'https://e.gkd.li/186f3000-57b3-4a6a-8895-d67c1c27b000',
          snapshotUrls: 'https://i.gkd.li/i/26191370',
        },
      ],
    },
    {
      key: 2,
      name: '局部广告-评论区广告',
      rules: [
        {
          fastQuery: true,
          activityIds: '.launcher.splash.SplashActivity',
          matches: [
            '[id="com.wudaokou.hippo:id/btn_cancel"]',
            '[text="暂不开启"]',
          ],
          exampleUrls: 'https://e.gkd.li/bb758ce2-09c2-4e57-b418-a0196c1b38a4',
          snapshotUrls: 'https://i.gkd.li/i/26191365',
        },
      ],
    },
  ],
});
