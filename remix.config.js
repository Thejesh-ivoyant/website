const { ProvidePlugin } = require('webpack');

/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ["**/.*"],
  tailwind: true,
  // ... other configurations
  serverModuleFormat: "cjs",
  styles: {
    postcss: {
      plugins: {
        'postcss-preset-env': {
          stage: 3,
          features: {
            'nesting-rules': true,
          },
        },
      },
    },
  },
  
  chainWebpack(config) {
    config.plugin('provide-mui-icons', ProvidePlugin, [
      ['@mui/material', 'icons', '@mui/icons-material'],
    ]);
  },
  
  future: {
    // ... other future flags
    v2_dev: true,
    v2_errorBoundary: true,
    v2_headers: true,
    v2_meta: true,
    v2_normalizeFormMethod: true,
    v2_routeConvention: true,
  },
};
