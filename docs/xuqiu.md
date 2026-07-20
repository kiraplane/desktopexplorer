# Desktop Explorer Wiki 网站开发需求

## 项目标识

- 游戏名称：Desktop Explorer
- 网站名称：Desktop Explorer Wiki
- 平台：Steam
- 规范域名：https://www.desktopexplorer.wiki
- 本地项目目录名：`desktopexplorer`
- GitHub 仓库名：`desktopexplorer`
- Cloudflare Worker 项目名：`desktopexplorer`

## 已核验的官方身份

- Steam 官方商店：https://store.steampowered.com/app/2527160/Desktop_Explorer/
- Steam App ID：`2527160`
- 开发者：Recurring Dream
- 发行商：Recurring Dream、Outersloth、indienova
- Steam 关联官方网站：https://recurringdream.studio/
- Steam 上线日期：2026-07-17
- 官方定位：一款以 1990 年代旧电脑和操作系统界面为核心的单人心理恐怖、解谜与调查冒险游戏。玩家需要浏览废弃用户资料、旧软件、聊天记录、损坏的应用和 3D 场景，追查失踪案件与继承而来的谜团。

身份边界：本项目只描述 Steam App `2527160` 的 Desktop Explorer 正式版。不得把系统文件管理器、同名工具软件、其他“桌面模拟器”游戏，或源模板的开发者、发行商、商店链接、玩法、成就和素材当作目标游戏内容。Desktop Explorer Demo App `2533590` 只能在明确标注其独立 Demo 身份时作为辅助资料。

## 核心种子关键词

- `desktop explorer`
- `desktop explorer wiki`
- `desktop explorer guide`
- `desktop explorer walkthrough`
- `desktop explorer puzzle guide`
- `desktop explorer steam`
- `desktop explorer achievements`
- `desktop explorer endings`

以上仅为建站预检种子词。完整开发前必须重新进行当前长尾需求、People Also Ask、相关搜索、竞品与 YouTube 资料调研，再将候选词标记为 `keep`、`ignore`、`watch` 或 `localize_later`，并据此决定实际页面、实体命名和路由；不预设 `codes`、`tier list` 或数据库页面。

## 目标文件与命名空间

- 计划 PRD：`docs/desktop-explorer-wiki-prd-and-implementation-plan.md`
- 目标数据层：`src/data/desktop-explorer/`
- 目标 App Router 路由组：`src/app/[locale]/(desktop-explorer)/`
- 目标组件命名空间：`src/components/desktop-explorer/`
- 目标静态资源命名空间：`public/desktop-explorer/`

## 确认后的开发范围

1. 基于当前搜索需求、Steam 官方资料、Steam 关联官网与官方渠道、可靠竞品和 YouTube 攻略，编写关键词矩阵、竞品基准和 PRD。
2. 将复制的模板彻底迁移为只服务 Desktop Explorer 的英文攻略站，按资料厚度决定首发页面数量，不为凑数制造空页面。
3. 根据已核验需求决定是否建设 walkthrough、puzzle solutions、passwords、profiles、software、achievements、endings、demo、system requirements 或其他页面；不得机械保留模板栏目，也不得在调研前公开剧透结构。
4. 首页、分类枢纽、攻略详情、侧边 Wiki 导航、移动端 Wiki 菜单、相关链接、法律页面、sitemap、robots 和 manifest 均使用 Desktop Explorer 专属内容与元数据，并对解谜与剧情内容采用清晰的剧透提示。
5. 完成模板迁移残留检查、lint、TypeScript、构建和浏览器预览 QA；未请求广告，因此确认后移除一切继承的 Adsterra 痕迹，并在首次构建前验证不存在 `ADSTERRA_*`。
6. 验证完成后创建并推送 GitHub 仓库 `desktopexplorer`，部署同名 Cloudflare Worker，绑定 `desktopexplorer.wiki` 与 `www.desktopexplorer.wiki`，以 `www` 为 canonical，并在权限允许时配置 GitHub 自动构建和 GA4。
7. 创建并验证 GSC Domain Property `sc-domain:desktopexplorer.wiki`，通过 Cloudflare apex DNS TXT 验证，提交完整 sitemap，并同步 GA-GTM 注册信息。
8. 按 `wiki-site-builder` 流程将站点幂等注册到 Shipmanager；第二个核心链接必须从实际实现且需求最强的 hub 中选择，不能预设为模板栏目。
