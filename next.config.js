const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
module.exports = withBundleAnalyzer({
// module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  flags: {
    DEV_SSR: false,
  },
  images: {
    domains: ["cerampakhsh.com", "localhost"],
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Important: return the modified config
    return config
  },
  async rewrites() {
    return [
      {
        source:`/${encodeURI("خرید-سریع")}/:slug*`,
        destination: '/onetwotree/:slug*',
      },
      {
        source:`/${encodeURI("تخفیفات-هیجان-انگیز")}`,
        destination: '/offers-list',
      },
      {
        source:`/${encodeURI("پیشنهاد-خرید-اعتباری")}`,
        destination: '/masters-list',
      },
      {
        source:`/order/${encodeURI("خرید-اعتباری")}`,
        destination: '/order/credit',
      },
      
      {
        source:`/advertise`,
        destination: encodeURI('/page/تبلیغات-در-سرام-پخش/99/'),
      },
      
      // {
      //   source: `/${encodeURI("forget-password")}`,
      //   destination: '/register/index',
      // },
    ]
  },
// }
})
