import merge from 'webpack-merge';

import webpack_common from './webpack.common';

const config = merge([
  webpack_common,
  {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
      contentBase: '../client/public',
    },
  },
]);

export default config;
