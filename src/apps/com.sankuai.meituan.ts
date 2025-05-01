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
    
  ],
});
