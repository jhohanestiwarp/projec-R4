const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  remotes: {
    "Authorizer": "https://di3vxk6kqlgtx.cloudfront.net/remoteEntry.js",
    "Program": "https://d1eeljbhayr8xh.cloudfront.net/remoteEntry.js",
    "System": "https://d1eeljbhayr8xh.cloudfront.net/remoteEntry.js",
    "UserAdmin": "https://d1eeljbhayr8xh.cloudfront.net/remoteEntry.js"
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
