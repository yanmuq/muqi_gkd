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
      name: '功能类-骑行免密弹窗',
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
            '[text="放弃，使用普通支付"][clickable=true][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/21549586',
          exampleUrls: 'https://e.gkd.li/f45dc954-85bd-4f22-8db7-fb6a9ffc2b0a',
        },
      ],
    },
    {
      key: 2,
      name: '功能类-骑行购卡弹窗',
      fastQuery: true,
      matchTime: 5000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 1,
          activityIds: 'com.meituan.msc.modules.container.MSCActivity',
          matches: '[text="仅支付车费"][clickable=false][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/21549744',
          exampleUrls: 'https://e.gkd.li/1f4db15c-b109-40ba-bb96-fb756f1ca46b',
        },
      ],
    },
  ],
});
