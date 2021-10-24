import TerserPlugin from 'terser-webpack-plugin';
import merge from 'webpack-merge';

import webpack_common from './webpack.common';

const config = merge([
  webpack_common,
  {
    mode: 'production',
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            ie8: false,
            safari10: false,
          },
        }),
      ],
    },
  },
]);

export default config;
