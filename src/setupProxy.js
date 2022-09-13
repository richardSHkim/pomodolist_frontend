const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    createProxyMiddleware(["/pyapi"], {
      target: 'http://pomodoro-fastapi-service:8000/',
      changeOrigin: true,
    })
  );
};