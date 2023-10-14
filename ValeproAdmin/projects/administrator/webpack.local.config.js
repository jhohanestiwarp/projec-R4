const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  remotes: {
    "Authorizer": "http://localhost:4201/remoteEntry.js",
    "Program": "http://localhost:4202/remoteEntry.js",
    "System": "http://localhost:4203/remoteEntry.js",
    "UserAdmin": "http://localhost:4204/remoteEntry.js",
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
