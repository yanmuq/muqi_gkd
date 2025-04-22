import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jingdong.app.mall',
  name: '京东',
  groups: [
    {
        key: 0,
        name: '全屏广告-还款免密弹窗',
        desc: '关闭',
        rules: [
          {
            fastQuery: true,
            activityIds: 'com.wangyin.payment.jdpaysdk.counter.ui.pay.CounterActivity',
            matches: '@[id="com.jd.lib.jdpaysdk.feature:id/aw"] + TextView[text="京东支付邀请你"]',
            snapshotUrls: 'https://i.gkd.li/i/19851560',
            exampleUrls: 'https://e.gkd.li/bc8bfb87-2bd5-431d-b939-f9ba31fdee26',
          },
        ],
    },
  ],
});