import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.com.sina.finance',
  name: '新浪财经',
  groups: [
    {
      key: 0,
      name: '更新提示-取消安装确认',
      desc: '点击取消',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      // 当前仅处理取消安装后的二次确认弹窗。
      // 待验证：取得首弹规则与快照后，在同一规则组内用 preKeys 衔接。
      // 另一待验证方向：确认首弹 back 仅关闭弹窗后再替换首步，两种首步动作不能同时启用。
      rules: [
        {
          key: 0,
          activityIds: 'cn.com.sina.finance.start.ui.home.MainActivity2',
          matches: [
            '[id="android:id/alertTitle"][text="新版本安装提示"]',
            '[id="android:id/message"][text="您确定要取消安装吗?"]',
            '[id="android:id/button1"][text="取消"][clickable=true][visibleToUser=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/34300807',
          exampleUrls:
            'https://raw.githubusercontent.com/yanmuq/muqi_gkd/main/assets/screenshots/34300807.png',
        },
      ],
    },
  ],
});
