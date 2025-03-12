import { defineGkdSubscription } from '@gkd-kit/define';
import { batchImportApps } from '@gkd-kit/tools';
import categories from './categories';
import globalGroups from './globalGroups';

export default defineGkdSubscription({
  id: 808,
  name: '言木七的GKD订阅',
  version: 0,
  author: 'yanmuqi',
  checkUpdateUrl: './gkd.version.json5',
  supportUri: 'https://github.com/yanmuq/GKD_subscription',
  categories,
  globalGroups,
  apps: await batchImportApps(`${import.meta.dirname}/apps`),
});
