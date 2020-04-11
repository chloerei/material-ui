---
title: Ruby on Rails
---

# Ruby on Rails

Rails 6.0 introduced webpacker as the second static resource packer, which allows import resource from npm.

## Install NPM package

```console
$ yarn add campo-ui
```

## Config

webpacker has been configured to handle js and css by default, confirm you have these two lines of code in your layout template:

```html
<%= javascript_pack_tag 'application' %>
<%= stylesheet_pack_tag 'application' %>
```

## Import CSS

Then add this content to `app/javascript/pack/application.js`:

```javascript
import 'campo-ui/dist/css/campo-ui.css'
```

## Import JavaScript

Then add this content to `app/javascript/pack/application.js`:

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
