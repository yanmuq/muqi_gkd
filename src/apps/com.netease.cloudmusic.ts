import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.netease.cloudmusic',
  name: '网易云音乐',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 5000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 5000,
      rules: [
        {
          key: 0,
          excludeActivityIds:
            'com.netease.cloudmusic.music.biz.setting.activity.SettingActivity',
          matches:
            '[text*="跳过"||text*="Skip"][text.length<10][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/15092772',
            'https://i.gkd.li/i/15092814', // 避免误触
            'https://i.gkd.li/i/17892200', // 'Skip' for English users.
          ],
        },
      ],
    },
    {
      key: 1,
      name: '分段广告-卡片广告',
      desc: '点击[X]-点击[直接关闭]/[不感兴趣]',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: [
            'com.netease.cloudmusic.activity.MainActivity',
            'com.netease.cloudmusic.music.biz.voice.player.revisionV1.ProgramPlayerActivityV1',
          ],
          excludeActivityIds:
            'com.netease.cloudmusic.music.biz.comment.activity.CommentActivity', // 排除评论区，避免节点被遮罩时误触，评论区广告规则见groups key 13
          matches: '[vid="adTagView"][clickable=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/a603ceca-7e89-4b1f-9e17-508c583b32d8',
          snapshotUrls: [
            'https://i.gkd.li/i/13859634',
            'https://i.gkd.li/i/12829964',
            'https://i.gkd.li/i/12829953',
            'https://i.gkd.li/i/16047087',
          ],
        },
        {
          key: 1,
          name: '推荐页广告',
          fastQuery: true,
          activityIds: 'com.netease.cloudmusic.activity.MainActivity',
          matches: '[vid="tag_ad_banner"][clickable=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/b14cda2e-27e5-4a91-8037-3ccbf1f9d0da',
          snapshotUrls: 'https://i.gkd.li/i/13927753',
        },
        {
          key: 2,
          name: '评论区内容推荐',
          activityIds:
            'com.netease.cloudmusic.music.biz.comment.activity.CommentActivity',
          matches:
            '@ViewGroup[clickable=true][childCount=2] > ImageView - ViewGroup > TextView[text.length>0]',
          snapshotUrls: [
            'https://i.gkd.li/i/13526986',
            'https://i.gkd.li/i/13526711',
          ],
        },
        {
          // preKeys: [0, 1],该条分段广告有概率被VIP弹窗插入导致二段不触发，故去掉preKeys
          key: 90,
          fastQuery: true,
          activityIds: [
            'com.netease.cloudmusic.module.ad.feedback.AdFeedbackBottomSheet',
            'com.netease.cloudmusic.activity.MainActivity',
            'com.netease.cloudmusic.music.biz.voice.player.revisionV1.ProgramPlayerActivityV1',
          ],
          matches: '[text="直接关闭"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12829967',
            'https://i.gkd.li/i/13859635',
            'https://i.gkd.li/i/16047089',
          ],
        },
        {
          preKeys: 2,
          key: 91,
          fastQuery: true,
          activityIds:
            'com.netease.cloudmusic.music.biz.comment.activity.CommentActivity',
          matches:
            '@[id="com.netease.cloudmusic:id/artist_container"] > [text="不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/i/13526712',
        },
      ],
    },
    {
      key: 7,
      name: '局部广告-播放界面广告',
      desc: '点击关闭',
      fastQuery: true,
      activityIds: 'com.netease.cloudmusic.activity.PlayerActivity',
      rules: [
        {
          key: 0,
          name: '右上角VIP小悬浮',
          matches:
            'TextView[text!=null] + ImageView[id="com.netease.cloudmusic:id/close"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13402634',
            'https://i.gkd.li/i/13402635',
            'https://i.gkd.li/i/13402636',
          ],
        },
        {
          key: 1,
          name: '巨幅卡片广告1',
          matches: '[text^="跳过广告"][text.length<=10]',
          snapshotUrls: 'https://i.gkd.li/i/13527105',
        },
        {
          key: 2,
          name: '巨幅卡片广告2',
          matches:
            '@TextView[text!=null][clickable=true][visibleToUser=true] - ViewGroup > [text*="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/14045424',
        },
        {
          key: 3,
          name: '巨幅卡片广告3',
          matches:
            '[vid="iv_ad_close"][clickable=true][visibleToUser=true][focusable=true]',
          snapshotUrls: 'https://i.gkd.li/i/15282417',
        },
      ],
    },
    {
      key: 15,
      name: '全屏广告-[获得新徽章]弹窗',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.netease.cloudmusic.activity.MainActivity',
          matches: '@ImageView[clickable=true] +7 [text="查看我的勋章"]',
          exampleUrls:
            'https://m.gkd.li/57941037/39e34e7d-eae3-4a54-9794-97c2528d13fb',
          snapshotUrls: 'https://i.gkd.li/i/14926750',
        },
      ],
    },
  ],
});
