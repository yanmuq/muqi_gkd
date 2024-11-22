import { defineGkdSubscription } from '@gkd-kit/define';
import { batchImportApps } from '@gkd-kit/tools';
import categories from './categories';
import globalGroups from './globalGroups';

export default defineGkdSubscription({
  id: 717,
  name: '九千院的GKD订阅',
  version: 0,
  author: 'jiuqianyuan',
  checkUpdateUrl: './gkd.version.json5',
  supportUri: 'https://github.com/jiuqianyuan/GKD_subscription',
  categories,
  globalGroups,
  apps: await batchImportApps(`${import.meta.dirname}/apps`),
});
