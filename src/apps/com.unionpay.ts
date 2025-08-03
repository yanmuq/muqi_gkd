import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.unionpay',
  name: '云闪付',
  groups: [
    {
      key: 2,
      name: '分段广告-支付完成界面卡片广告',
      fastQuery: true,
      activityIds: 'com.unionpay.activity.react.UPActivityReactNative',
      rules: [
        {
          key: 0,
          matches: '[id="bannerBox"] > @View[clickable=true] > [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/13070564',
        },
        {
          preKeys: [0],
          key: 1,
          matches: '[text="关闭广告"]',
          snapshotUrls: 'https://i.gkd.li/i/13070974',
        },
      ],
    },
    {
      key: 3,
      name: '全屏广告-付款后信用卡广告',
      desc: '2025-03-11由审查工具生成',
      fastQuery: true,
      matchTime: 5000,
      actionMaximum: 1,
      resetMatch: 'app', // 规则因匹配时间到达而休眠后，重新打开应用时才会唤醒
      //actionDelay: 1, // 匹配后，延时 10 毫秒再执行对应操作
      rules: [
        {
          activityIds: 'com.unionpay.activity.react.UPActivityReactNative',
          matches: '@android.widget.ImageView < * + TextView[text^="申卡限时"]',
          snapshotUrls: 'https://i.gkd.li/i/19408456',
          exampleUrls: 'https://e.gkd.li/821e2393-3a10-4061-8fec-e6866e729bf7',
        },
      ],
    },

    {
      key: 12,
      name: '提示类弹窗-开启通知弹窗',
      desc: '点击关闭',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.base.UPDialog',
          matches:
            '[text="开启消息通知"] < * + [id="com.unionpay:id/view_alert_cancel"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/12695736',
        },
      ],
    },
    {
      key: 13,
      name: '全屏广告-天天签到-获得新勋章提示',
      desc: '点击左上角返回',
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.unionpay.cordova.UPActivityCordovaWeb',
          matches:
            'WebView[text="天天签到"] TextView[text="炫耀一下"] + TextView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13440341',
        },
      ],
    },
    {
      key: 15,
      name: '全屏广告-领取优惠弹窗',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.unionpay.cordova.UPActivityCordovaWeb',
          matches:
            '@View[clickable=true][text="关闭按钮"] <<n [vid="view_content_container"]',
          snapshotUrls: 'https://i.gkd.li/i/13848688',
        },
      ],
    },
  ],
});
