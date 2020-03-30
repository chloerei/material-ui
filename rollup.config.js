import resolve from '@rollup/plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'
import postcss from 'rollup-plugin-postcss'
import autoprefixer from 'autoprefixer'

const plugins = [
  resolve(),
  babel({
    exclude: 'node_modules/**'
  })
]

export default [{
  input: 'src/js/campo-ui.js',
  output: [{
    file: 'dist/js/campo-ui.js',
    format: 'umd',
    name: 'CampoUI',
    sourcemap: true,
    globals: {
      stimulus: 'Stimulus'
    }
  }, {
    file: 'dist/js/campo-ui.min.js',
    format: 'umd',
    name: 'CampoUI',
    sourcemap: true,
    globals: {
      stimulus: 'Stimulus'
    },
    plugins: [terser()]
  }],
  context: 'window',
  external: ['stimulus'],
  plugins
}, {
  input: 'src/js/campo-ui.js',
  output: [{
    file: 'dist/js/campo-ui.bundle.js',
    format: 'umd',
    name: 'CampoUI',
    sourcemap: true
  }, {
    file: 'dist/js/campo-ui.bundle.min.js',
    format: 'umd',
    name: 'CampoUI',
    sourcemap: true,
    plugins: [terser()]
  }],
  context: 'window',
  plugins
}, {
  input: 'src/css/index.js',
  output: [{
    file: 'dist/css/campo-ui.js'
  }],
  plugins: [
    postcss({
      extract: true,
      sourceMap: true,
      plugins: [autoprefixer()],
    })
  ]
}, {
  input: 'src/css/index.js',
  output: [{
    file: 'dist/css/campo-ui.min.js'
  }],
  plugins: [
    postcss({
      extract: true,
      sourceMap: true,
      plugins: [autoprefixer()],
      minimize: true
    })
  ]
}]
