module.exports = {
    devServer: {
        proxy: {
            '^/apies': {
                target: 'https://pub-cdn-oss.chuangkit.com',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '/apies': '',
                }
            },
            '^/apis': {
                target: 'https://api.chuangkit.com',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '/apis': '',
                }
            },
            '^/api': {
                target: 'https://api-v2.chuangkit.com',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '/api': '',
                }
            },
        },
    }
}