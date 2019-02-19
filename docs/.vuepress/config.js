module.exports = {
    title: 'EDU++',
    description: 'EDU++ 开发文档中心',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],

    themeConfig: {
        nav: [
            { text: 'VuePress', link: 'https://vuepress.vuejs.org/zh/' },
            { text: 'Guide', link: '/a' },
            { text: 'Github', link: 'https://github.com/asd8855' },
        ],

        sidebar: [
            {
                title: '微信支付宝接入',
                path: '/wechat_alipay/signature',
                children: [
                    ['/wechat_alipay/signature', '数字签名'],
                    ['/wechat_alipay/api', '接口明细'],
                    ['/wechat_alipay/callback', '回调通知'],
                    ['/wechat_alipay/statusCode', '状态编码'],
                ]
            },
            {
                title: '银联快捷支付接入',
                path: '/unionpay/signature',
                children: [
                    ['/unionpay/signature', '数字签名'],
                    ['/unionpay/api', '接口明细'],
                    ['/unionpay/callback', '回调通知'],
                    ['/unionpay/statusCode', '状态编码'],
                ]
            },
            {
                title: '花呗分期接入',
                path: '/antCheckLater/signature',
                children: [
                    ['/antCheckLater/signature', '数字签名'],
                    ['/antCheckLater/api', '接口明细'],
                    ['/antCheckLater/callback', '回调通知'],
                    ['/antCheckLater/statusCode', '状态编码'],
                ]
            },
            {
                title: '京东白条接入',
                path: '/jsBT/signature',
                children: [
                    ['/jsBT/signature', '数字签名'],
                    ['/jsBT/api', '接口明细'],
                    ['/jsBT/callback', '回调通知'],
                    ['/jsBT/statusCode', '状态编码'],
                ]
            },
            {
                title: '信用卡分期接入',
                path: '/creditCardInstallment/signature',
                children: [
                    ['/creditCardInstallment/signature', '数字签名'],
                    ['/creditCardInstallment/api', '接口明细'],
                    ['/creditCardInstallment/callback', '回调通知'],
                    ['/creditCardInstallment/statusCode', '状态编码'],
                ]
            },
            {
                title: '无卡分期分期接入',
                path: '/noCardInstallment/signature',
                children: [
                    ['/noCardInstallment/signature', '数字签名'],
                    ['/noCardInstallment/api', '接口明细'],
                    ['/noCardInstallment/callback', '回调通知'],
                    ['/noCardInstallment/statusCode', '状态编码'],
                ]
            }


        ]
    }
}