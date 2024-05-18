const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function(app) {
    app.use(
        "/test",
        createProxyMiddleware({
            target: "127.0.0.1:3000",
            changeOrigin: true,
        })
    );
};