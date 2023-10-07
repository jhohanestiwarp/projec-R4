const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  remotes: {
    "Authorizer": "https://d1j6sbuwxkv8dq.cloudfront.net/remoteEntry.js",
    "Program": "https://d2092bo3tm4dhw.cloudfront.net/remoteEntry.js",
    "System": "https://d1j6sbuwxkv8dq.cloudfront.net/remoteEntry.js"
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
