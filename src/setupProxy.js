const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    createProxyMiddleware(["/pyapi"], {
      target: 'http://pomodolist-ml-backend-service:8000/',
      changeOrigin: true,
    })
  );
  app.use(
    createProxyMiddleware(["/api"], {
      target: 'http://pomodolist-backend-service:8001/',
      changeOrigin: true,
    })
  );
};