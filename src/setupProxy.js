const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    createProxyMiddleware(["/pyapi"], {
      target: 'http://10.128.0.12:8000/',
      changeOrigin: true,
    })
  );
};