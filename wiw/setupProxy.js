const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api", // 프록시할 요청 경로
    createProxyMiddleware({
      target: "http://localhost:8080", // Express 서버 주소
      changeOrigin: true,
    })
  );
};
