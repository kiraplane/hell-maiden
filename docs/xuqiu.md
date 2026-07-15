# Hell Maiden Wiki 网站开发需求

## 项目标识

- 游戏名称：Hell Maiden
- 网站名称：Hell Maiden Wiki
- 平台：Steam
- 规范域名：https://www.hell-maiden.wiki
- 本地项目目录名：`hell-maiden`
- GitHub 仓库名：`hell-maiden`
- Cloudflare Worker 项目名：`hell-maiden`

## 已核验的官方身份

- Steam 官方商店：https://store.steampowered.com/app/3372060/Hell_Maiden/
- Steam App ID：`3372060`
- Steam 官方 Demo：https://store.steampowered.com/app/4002340/Hell_Maiden_Demo/
- Steam Demo App ID：`4002340`
- 开发者：AstralShift
- 发行商：AstralShift
- 官方网站：https://astralshiftpro.com/home（由 Steam 商店直接关联）
- Steam 计划以 Early Access 上线：2026-07-16
- 官方定位：受但丁《神曲》启发的动作类 Horde Survival Deck-Building 游戏，核心包括武器与能力卡组构筑、Mod Cards、Spirit Cards、Poets of Limbo、Boss 战和 Circles of Hell。

不得将模板游戏的商店链接、App ID、开发者、发行商、角色、系统、地图、发布日期、代码或其他事实带入 Hell Maiden。

## 核心种子关键词

- `hell maiden`
- `hell maiden wiki`
- `hell maiden guide`
- `hell maiden steam`
- `hell maiden beginner guide`
- `hell maiden builds`
- `hell maiden cards`
- `hell maiden deck building`

以上仅为建站预检种子词。完整开发前必须重新进行当前长尾需求、People Also Ask、相关搜索、竞品与 YouTube 资料调研，再决定实际页面、实体命名和路由；不预设 `codes`、`tier list` 或数据库页面。

## 目标文件与命名空间

- 计划 PRD：`docs/hell-maiden-wiki-prd-and-implementation-plan.md`
- 目标数据层：`src/data/hell-maiden/`
- 目标 App Router 路由组：`src/app/[locale]/(hell-maiden)/`
- 目标组件命名空间：`src/components/hell-maiden/`
- 目标静态资源命名空间：`public/hell-maiden/`

## 确认后的开发范围

1. 基于当前搜索需求、Steam 官方资料、Steam 关联官方渠道、可靠竞品和 YouTube 攻略，编写关键词矩阵、竞品基准和 PRD。
2. 将复制的模板彻底迁移为只服务 Hell Maiden 的英文攻略站，按资料厚度决定首发页面数量，不为凑数制造空页面。
3. 首页、分类枢纽、攻略详情、侧边 Wiki 导航、移动端 Wiki 菜单、相关链接、法律页面、sitemap、robots 和 manifest 均使用 Hell Maiden 专属内容与元数据。
4. 完成模板迁移残留检查、lint、TypeScript、构建和浏览器预览 QA。
5. 验证完成后创建并推送 GitHub 仓库 `hell-maiden`，部署同名 Cloudflare Worker，绑定 `www.hell-maiden.wiki`，配置自动构建、GA4 和 GSC Domain Property；若认证或外部审批阻塞，则明确记录阻塞点。
6. 按 `wiki-site-builder` 流程将站点幂等注册到 Shipmanager，并验证两条核心链接。
