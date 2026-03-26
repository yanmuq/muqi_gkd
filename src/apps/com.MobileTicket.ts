import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.MobileTicket',
  name: '铁路12306',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      order: -10,
      matchTime: 5000,
      forcedTime: 5000,
      resetMatch: 'app',
      priorityTime: 5000,
      actionDelay: 200,
      rules: [
        {
          fastQuery: true,
          matches:
            '[vid="tv_main_splash_skip" || vid="tv_skip"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/9a9b71b2-0c52-4623-b53b-6dd07d0cbe7c',
          snapshotUrls: [
            'https://i.gkd.li/i/17580273',
            'https://i.gkd.li/i/17656103',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '功能类-同意认证',
      matchTime: 5000,
      forcedTime: 5000,
      resetMatch: 'match',
      priorityTime: 5000,
      actionDelay: 100,
      fastQuery: true,
      exampleUrls: 'https://e.gkd.li/8f6c61d1-fe4d-4770-97ad-6769ec1ec1ba',
      snapshotUrls: 'https://i.gkd.li/i/26278038',
      activityIds: 'com.alipay.mobile.nebulacore.ui.H5Activity',
      rules: [
        {
          key: 1,
          name: '勾选认证服务协议',
          matches:
            '@MenuItem[checked=false] < View <2 View < WebView < bc < WebView < [vid="h5_pc_container"]',
        },
        {
          key: 2,
          name: '点击隐私权政策',
          preKeys: [1],
          matches:
            '@MenuItem[checked=false] < View <3 View < WebView < bc < WebView < [vid="h5_pc_container"]',
        },
        {
          key: 3,
          name: '点击下一步',
          preKeys: [1, 2],
          matches:
            '@Button < View <4 View < WebView < bc < WebView < [vid="h5_pc_container"]',
        },
      ],
    },
  ],
});
