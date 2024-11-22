import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jianshu.haruki',
  name: '简书',
  groups: [
    {
      key: 1,
      name: '全屏广告-VIP弹窗',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.baiji.jianshu.ui.splash.SplashScreenActivity',
          matches: '[id="com.jianshu.haruki:id/dialog_lucky_prize_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13327286',
        },
      ],
    },
    {
      key: 2,
      name: '更新提示',
      fastQuery: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          action: 'back',
          matches: '[text="升级到最新版本"]',
          snapshotUrls: 'https://i.gkd.li/i/15989275',
        },
      ],
    },
    {
      key: 3,
      name: '局部广告-信息流广告',
      desc: '点击关闭',
      fastQuery: true,
      rules: [
        {
          name: '快手、腾讯广告SDK-局部广告',
          matches: 'ImageView[vid="nativeAdClose"]',
          snapshotUrls: [
            'https://i.gkd.li/i/16201541',
            'https://i.gkd.li/i/16324702',
          ],
        },
      ],
    },
    {
      key: 8,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          name: '腾讯广告SDK-全屏弹窗',
          matches:
            'FrameLayout > FrameLayout[childCount>2] > FrameLayout[childCount=1] > ImageView[visibleToUser=true][width<80][height<80][vid=null]',
          snapshotUrls: [
            'https://i.gkd.li/i/16324561',
            'https://i.gkd.li/i/16324692',
            'https://i.gkd.li/i/16324634',
            'https://i.gkd.li/i/16324713', // 误触，add [visibleToUser=true]
          ],
        },
      ],
    },
    {
      key: 9,
      name: '局部广告-文章页-底部悬浮卡片',
      activityIds: 'com.jianshu.wireless.articleV2.X5ArticleDetailActivity',
      rules: [
        {
          name: '字节广告SDK-底部悬浮卡片',
          matches: 'ImageView[vid="mCloseView"]',
          snapshotUrls: 'https://i.gkd.li/i/16324702',
        },
      ],
    },
  ],
});
