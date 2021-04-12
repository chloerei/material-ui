import resolve from '@rollup/plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'
import postcss from 'rollup-plugin-postcss'
import autoprefixer from 'autoprefixer'

let jsFileName = 'campo-ui'
let cssFileName = 'campo-ui'

let jsPlugins = [
  resolve(),
  babel({
    exclude: 'node_modules/**'
  })
]

let postcssConfig = {
  extract: true,
  sourceMap: true,
  plugins: [autoprefixer()]
}

if (process.env.BUNDLE) {
  jsFileName += '.bundle'
}

if (process.env.MINIMIZE) {
  jsFileName += '.min'
  cssFileName += '.min'

  jsPlugins.push(terser())
  postcssConfig.minimize = true
}

const rollupConfig = [{
  input: 'src/js/campo-ui.js',
  output: {
    file: `dist/js/${jsFileName}.js`,
    format: 'umd',
    name: 'CampoUI',
    sourcemap: true,
    globals: {
      stimulus: 'Stimulus'
    }
  },
  context: 'window',
  external: ['stimulus'],
  plugins: jsPlugins
}, {
  input: 'src/css/index.js',
  output: [{
    file: `dist/css/${cssFileName}.js`
  }],
  plugins: [
    postcss(postcssConfig)
  ]
}]

export default rollupConfig
