# GKD 附加订阅开发约定

本仓库是 `yanmuq/muqi_gkd`，订阅名称为“言木七的附加订阅”，ID 为 `808`。应用规则在 `src/apps/`，发布订阅为 `dist/gkd.json5`，版本索引为 `dist/gkd.version.json5`。

## 官方资料

编写或排查规则时，按涉及的参数查阅官方文档，不凭字段名称猜测语义：

- [订阅规则手册](https://gkd.li/guide/subscription)
- [API 入口](https://gkd.li/api/)
- [通用参数：matchTime、resetMatch、actionMaximum、fastQuery、snapshotUrls、exampleUrls](https://gkd.li/api/interfaces/rawcommonprops)
- [选择器语法](https://gkd.li/guide/selector)
- [查询优化](https://gkd.li/guide/optimize)
- [快照审查工具](https://i.gkd.li/)

## 规则与性能

- 先用快照验证现有规则。已能命中的规则不重复添加，也不因出现新快照就重写匹配逻辑。
- 开屏、升级提示等进入应用时出现的弹窗，默认采用 `matchTime: 10000`、`resetMatch: 'app'`、`actionMaximum: 1`；确有弹窗延迟证据时可使用 20000 毫秒。
- `matchTime` 是规则参与匹配后的有效时长，单位为毫秒；`resetMatch: 'app'` 在重新进入应用时重置有效时长及点击次数。不要写成进入每个页面后重新计算 10 秒。`'activity'` 会随 Activity 刷新重置，`'match'` 会在应用内由不匹配界面切换为匹配界面时重置。
- `fastQuery: true` 需要选择器符合官方快速查询格式，并有快照的可快速查找依据。按实际节点选择可靠的 ID 或文本，不为假设情况增加遍历、强制查询或轮询。
- 每条适配规则保留 `snapshotUrls` 和可查看的 `exampleUrls` 图片链接。链接数组内的快照均应覆盖同一条规则的适用界面。
- 不同订阅的同名规则及启用状态独立。本仓库“更新提示”类别默认关闭；美团更新提示是应用 `com.sankuai.meituan` 下的规则组 `key: 2`。排查未触发时区分快照能否匹配、用户是否开启本订阅对应规则、匹配时间是否已到。

## 文档边界

- 第一套资料为本文件、根目录 `README.md`、`dist/README.md` 等当前使用及开发资料，只描述当前状态；开发任务中的待办不代表已经实现。
- 第二套资料包括已有的 `dist/CHANGELOG.md`，以及统一存放于 `docs/human/` 的历史需求、设计变动、未来计划、踩坑和错误记录。它们不进入普通开发会话的默认上下文。
- 普通开发会话禁止读取、搜索或写入第二套资料，也不得通过 Git 历史、差异、备份、副本或构建脚本间接访问。只有用户另开专门维护资料的会话并明确授权操作及范围时才可处理；授权不跨会话继承。新建或追加授权不等于读取已有内容的授权。
- `pnpm run build` 的默认构建器会写入 `dist/CHANGELOG.md`；普通开发会话生成发布产物时仅处理当前订阅、版本索引及当前规则清单，不调用历史记录生成步骤。
- 文档边界采用项目规则软约束，沿用会话沙箱及自动审批，不增加权限档、目录沙箱或文件锁。

## 验证与提交

- 使用项目锁定的 pnpm 和依赖版本。先定向验证受影响选择器及快照，复用仍有效的结果。
- 遵守已有 Git hooks：提交时检查暂存文件，推送前运行 `pnpm run check`。不要另外追加无关的全仓检查。
- 发布订阅数据变化时递增 `dist/gkd.json5` 与 `dist/gkd.version.json5` 的版本，并同步当前规则清单；不改动其他应用规则或启用默认值。
- 不保存或输出 GitHub 令牌。
