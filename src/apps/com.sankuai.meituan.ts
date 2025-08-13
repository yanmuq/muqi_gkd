import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sankuai.meituan',
  name: '美团',
  groups: [
    {
      key: 0,
      name: '功能类-付款后点击完成',
      fastQuery: true,
      matchTime: 5000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 1,
          activityIds:
            'com.meituan.android.hybridcashier.HybridCashierActivity',
          matches:
            '[text="支付成功"] >5 @[clickable=true][text="完成"] <<n [vid="mil_container"]',
          snapshotUrls: 'https://i.gkd.li/i/14392284',
          exampleUrls: 'https://e.gkd.li/2a8a8dd5-7b07-485b-8079-02d6982e295c',
        },
      ],
    },
    {
      key: 1,
      name: '功能类-骑行支付弹窗',
      matchRoot: true,
      rules: [
        {
          key: 1,
          fastQuery: true,
          matchTime: 5000,
          actionMaximum: 2,
          resetMatch: 'app',
          activityIds:
            'com.meituan.android.hybridcashier.HybridCashierActivity',
          matches: '@[text^="放弃"] <<n [vid="mil_container"]',
          exampleUrls: 'https://e.gkd.li/f45dc954-85bd-4f22-8db7-fb6a9ffc2b0a',
          snapshotUrls: 'https://i.gkd.li/i/21549586',
        },
        {
          key: 2,
          fastQuery: true,
          actionMaximum: 2,
          resetMatch: 'app',
          activityIds: 'com.meituan.msc.modules.container.MSCActivity',
          matches: '[text="仅支付车费"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/21549744',
          exampleUrls: 'https://e.gkd.li/1f4db15c-b109-40ba-bb96-fb756f1ca46b',
          //@[text="仅支付车费"] <<n View <<64 [vid="container"]
        },
      ],
    },
  ],
});
