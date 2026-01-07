import babel from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import fs from 'fs';
import path from 'path';

const JS_SRC = '_javascript';
const JS_DIST = 'assets/js/dist';

const isProd = process.env.NODE_ENV === 'production';

function cleanup() {
  return {
    name: 'cleanup',
    buildStart() {
      const dist = path.resolve(JS_DIST);
      if (fs.existsSync(dist)) {
        fs.readdirSync(dist).forEach((file) => {
          fs.unlinkSync(path.join(dist, file));
        });
      }
    }
  };
}

function watching() {
  return {
    name: 'watching',
    buildEnd() {
      if (!isProd) {
        console.log('[INFO] Watching for changes...');
      }
    }
  };
}

const config = [
  {
    input: `${JS_SRC}/commons.js`,
    output: {
      file: `${JS_DIST}/commons.min.js`,
      format: 'iife'
    },
    plugins: [
      nodeResolve(),
      babel({
        babelHelpers: 'bundled',
        presets: ['@babel/preset-env'],
        plugins: ['@babel/plugin-proposal-class-properties']
      }),
      isProd && terser(),
      cleanup(),
      watching()
    ]
  },
  {
    input: `${JS_SRC}/home.js`,
    output: {
      file: `${JS_DIST}/home.min.js`,
      format: 'iife'
    },
    plugins: [
      nodeResolve(),
      babel({
        babelHelpers: 'bundled',
        presets: ['@babel/preset-env']
      }),
      isProd && terser()
    ]
  },
  {
    input: `${JS_SRC}/categories.js`,
    output: {
      file: `${JS_DIST}/categories.min.js`,
      format: 'iife'
    },
    plugins: [
      nodeResolve(),
      babel({
        babelHelpers: 'bundled',
        presets: ['@babel/preset-env']
      }),
      isProd && terser()
    ]
  },
  {
    input: `${JS_SRC}/page.js`,
    output: {
      file: `${JS_DIST}/page.min.js`,
      format: 'iife'
    },
    plugins: [
      nodeResolve(),
      babel({
        babelHelpers: 'bundled',
        presets: ['@babel/preset-env']
      }),
      isProd && terser()
    ]
  },
  {
    input: `${JS_SRC}/post.js`,
    output: {
      file: `${JS_DIST}/post.min.js`,
      format: 'iife'
    },
    plugins: [
      nodeResolve(),
      babel({
        babelHelpers: 'bundled',
        presets: ['@babel/preset-env']
      }),
      isProd && terser()
    ]
  },
  {
    input: `${JS_SRC}/misc.js`,
    output: {
      file: `${JS_DIST}/misc.min.js`,
      format: 'iife'
    },
    plugins: [
      nodeResolve(),
      babel({
        babelHelpers: 'bundled',
        presets: ['@babel/preset-env']
      }),
      isProd && terser()
    ]
  }
];

export default config;