import { defineGkdCategories } from '@gkd-kit/define';

export default defineGkdCategories([
  {
    enable: false,
    key: 0,
    name: '开屏广告',
    //进入应用前的广告页面
  },
  {
    enable: false,
    key: 1,
    name: '全屏广告',
    // 不关闭广告就无法进行其它操作的广告弹窗, 它阻碍用户操作
    // 一般是刚进入APP时显示的全屏弹窗
    // 不包含推送通知弹窗类
  },
  {
    enable: false,
    key: 2,
    name: '更新提示',
  },
  {
    enable: true,
    key: 3,
    name: '权限控制',
    // 权限请求/申请系统弹窗，仅限系统应用
  },
  {
    enable: true,
    key: 4,
    name: '提示类',
    //弹出的与当前APP自身相关提示类，如淘宝通知弹窗，QQ音乐提示存储空间权限弹窗
    //全屏广告的细分子类，一般进入应用后立即弹出
    //在子页面及长时间后弹出的由于性能消耗大归于功能类，如华为运动的步数通知弹窗
  },
  {
    enable: false,
    key: 5,
    name: '青少年弹窗',
  },
  {
    enable: false,
    key: 8,
    name: '局部广告',
    // 不影响使用的广告, 所有的广告卡片及悬浮广告按钮
  },
  {
    enable: false,
    key: 9,
    name: '分段广告',
    // 如微信朋友圈广告/酷安帖子广告/贴吧帖子广告
    // 需要分阶段多步操作才能关闭, 会造成屏幕略微闪烁, 稍微影响用户体验
  },
  {
    enable: false,
    key: 10,
    name: '功能类',
    // 非广告, 点击某些功能按钮
    // 公告弹窗归此类
    //性能原因不默认开启的归于此的提示类
  },
  {
    enable: false,
    key: 11,
    name: '其他', // 分类不明确
  },
]);
