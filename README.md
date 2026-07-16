# FleetFlow Miniapp

免费开源的同城配送司机/调度员移动工作台，覆盖扫码接单、路线追踪、送达确认、签收记录和异常闭环。点击操作会调用 `fleetflow-admin` 的 `/api/v1`，失败时保留演示数据，方便无后端预览。

```bash
npm install
npm run dev
```

Vite 已将 `/api` 代理到 `http://localhost:8080`；跨域部署时设置 `VITE_API_BASE=http://localhost:8080/api/v1`。
