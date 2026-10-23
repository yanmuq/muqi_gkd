import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.wemeet.app',
  name: '腾讯会议',
  groups: [
    {
      key: 0,
      name: '更新提示',
      desc: '点击右上角关闭',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds:
            'com.tencent.wemeet.sdk.meeting.premeeting.home.HomeActivity',
          matches:
            '[vid="upgrade_logo"] + ImageView[vid="btnClose"][clickable=true][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/33872644',
          exampleUrls: 'https://e.gkd.li/6ca43dda-3031-4c5a-9a06-64519fcb84b1',
        },
      ],
    },
  ],
});
