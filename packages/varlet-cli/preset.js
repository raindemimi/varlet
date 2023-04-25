const babelConfig = require('./lib/config/babel.config')

const defaultFn = () => {
  return 'default'
}

module.exports = (api, options) => babelConfig(api, options)
