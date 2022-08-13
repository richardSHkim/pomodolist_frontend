const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    createProxyMiddleware(["/api"], {
      target: 'http://localhost:8000/',
      changeOrigin: true,
    })
  );
  app.use(
    createProxyMiddleware(["/pyapi"], {
      target: 'http://localhost:8000/',
      changeOrigin: true,
    })
  );
};