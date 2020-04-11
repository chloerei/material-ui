---
title: Webpack
---

# Webpack

Learn how to include Campo UI in your project using Webpack.

## Install NPM package

```console
$ npm install campo-ui
```

or

```console
$ yarn add campo-ui
```

## Config

Add this content to webpack config:

```javascript
module: {
  rules: [
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }
  ]
}
```

It enabled webpack to process css.

## Import CSS

Then add this content to entry file:

```javascript
import 'campo-ui/dist/css/campo-ui.css'
```

## Import JavaScript

Then add this content to entry file:

```javascript
import 'campo-ui/dist/js/campo-ui.bundle.js'
```

If you are using stimulus, use this content to get stimlus application:

```javascript
// required stimulus installed
import { definitionsFromContext } from "stimulus/webpack-helpers"
import { application } from 'campo-ui/dist/js/campo-ui.js'

const context = require.context("./controllers", true, /\.js$/)
application.load(definitionsFromContext(context))
```
