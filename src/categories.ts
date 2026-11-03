import { defineGkdCategories } from '@gkd-kit/define';

// 前九类跟随各规则组的默认启用状态；系统权限独立保留分类默认开启。
export default defineGkdCategories([
  {
    key: 12,
    name: '限时-开屏广告',
  },
  {
    key: 13,
    name: '限时-全屏广告',
  },
  {
    key: 14,
    name: '限时-应用提示',
  },
  {
    key: 15,
    name: '持续-小程序开屏广告',
  },
  {
    key: 16,
    name: '持续-全屏广告',
  },
  {
    key: 17,
    name: '持续-页面内广告',
  },
  {
    key: 18,
    name: '持续-应用提示弹窗',
  },
  {
    key: 19,
    name: '持续-更新提示',
  },
  {
    key: 20,
    name: '持续-功能操作',
  },
  {
    enable: true,
    key: 3,
    name: '系统权限',
  },
]);
