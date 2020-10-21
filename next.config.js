const BundleAnalyzer = require('@next/bundle-analyzer')

let config = {}

if (process.env.ANALYZE === 'true') {
  const withBundleAnalyzer = BundleAnalyzer({
    enabled: process.env.ANALYZE === 'true'
  })

  config = withBundleAnalyzer(config)
}

module.exports = config
