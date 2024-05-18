const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function(app) {
    app.use(
        "/test",
        createProxyMiddleware({
            targetr: "http://localhost:3000",
            changeOrigin: true,
        })
    );
};