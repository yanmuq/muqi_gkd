import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sankuai.meituan',
  name: '美团',
  groups: [
    {
      key: 0,
      name: '功能类-付款后点击完成',
      fastQuery: true,
      matchRoot: true,
      actionMaximum: 1,
      resetMatch: 'match',
      rules: [
        {
          key: 2,
          order: -1,
          fastQuery: false,
          activityIds:
            'com.meituan.android.hybridcashier.HybridCashierActivity',
          matches: [
            '[text="支付成功"]',
            '@TextView[text=""][clickable=true][visibleToUser=true] < View[childCount=1] + View > [text^="月付新人开通礼"]',
          ],
          action: 'clickCenter',
          snapshotUrls: 'https://i.gkd.li/i/33155314',
          exampleUrls:
            'https://raw.githubusercontent.com/yanmuq/muqi_gkd/main/assets/screenshots/33155314.png',
        },
        {
          key: 1,
          activityIds:
            'com.meituan.android.hybridcashier.HybridCashierActivity',
          matches:
            '[text="支付成功"] >n @[clickable=true][text="完成"] <<n [vid="mil_container"]',
          snapshotUrls: [
            'https://i.gkd.li/i/14392284',
            'https://i.gkd.li/i/33155314',
          ],
          exampleUrls: [
            'https://e.gkd.li/2a8a8dd5-7b07-485b-8079-02d6982e295c',
            'https://raw.githubusercontent.com/yanmuq/muqi_gkd/main/assets/screenshots/14392284.png',
            'https://raw.githubusercontent.com/yanmuq/muqi_gkd/main/assets/screenshots/33155314.png',
          ],
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
          fastQuery: false,
          actionMaximum: 2,
          resetMatch: 'match',
          forcedTime: 5000,
          activityIds:
            'com.meituan.android.hybridcashier.HybridCashierActivity',
          matches: '@[text^="放弃"] <<n [vid="mil_container"]',
          exampleUrls: [
            'https://e.gkd.li/f45dc954-85bd-4f22-8db7-fb6a9ffc2b0a',
            'https://raw.githubusercontent.com/yanmuq/muqi_gkd/main/assets/screenshots/21549586.png',
          ],
          snapshotUrls: 'https://i.gkd.li/i/21549586',
        },
        {
          key: 2,
          fastQuery: false,
          actionMaximum: 2,
          resetMatch: 'app',
          activityIds: 'com.meituan.msc.modules.container.MSCActivity',
          matches: '[text="仅支付车费"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/21549744',
          exampleUrls: [
            'https://e.gkd.li/1f4db15c-b109-40ba-bb96-fb756f1ca46b',
            'https://raw.githubusercontent.com/yanmuq/muqi_gkd/main/assets/screenshots/21549744.png',
          ],
          //@[text="仅支付车费"] <<n View <<64 [vid="container"]
        },
      ],
    },
    {
      key: 2,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches:
            '@Button[vid="btn_cancel"] + Button[vid="qtd"] <n RelativeLayout > [text="美团App可升级至新版"]',
          snapshotUrls: 'https://i.gkd.li/i/33159194',
          exampleUrls:
            'https://raw.githubusercontent.com/yanmuq/muqi_gkd/main/assets/screenshots/33159194.png',
        },
      ],
    },
  ],
});
