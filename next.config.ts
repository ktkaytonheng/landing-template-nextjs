/* eslint-disable @typescript-eslint/no-require-imports */
import type { NextConfig } from 'next';

const path = require('path');

const nextConfig: NextConfig = {
    /* config options here */
    reactCompiler: true,
    turbopack: {
        resolveAlias: {
            '@': path.resolve(__dirname, './src'),
            '~': path.resolve(__dirname, '.')
        }
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'src')],
        silenceDeprecations: ['legacy-js-api']
    }
};

export default nextConfig;
