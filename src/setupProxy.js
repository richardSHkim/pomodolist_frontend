const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    createProxyMiddleware(["/pyapi"], {
      target: 'http://34.133.64.167:8000/',
      changeOrigin: true,
    })
  );
};