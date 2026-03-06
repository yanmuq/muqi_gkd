import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.microsoft.office.officehubrow',
  name: '微软office',
  groups: [
    {
      key: 0,
      name: '全屏广告-设为默认',
      desc: '不，谢谢',
      rules: [
        {
          fastQuery: true,
          activityIds:
            'com.microsoft.office.officemobile.Pdf.OfficeMobilePdfActivity',
          matches:
            '@[vid="set_default_app_cta_no_thanks"] + TextView[vid="set_default_app_cta_yes"]',
          snapshotUrls: 'https://i.gkd.li/i/25801057',
          exampleUrls: 'https://e.gkd.li/bc8bfb87-2bd5-431d-b939-f9ba31fdee26',
        },
      ],
    },
  ],
});
