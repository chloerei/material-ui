---
title: Installation
---

# Installation

## NPM

Install from npm:

```bash
npm install @chloerei/material-ui
```

Then require in your HTML page:

```html
<link rel="stylesheet" href="/node_modules/@chloerei/material-ui/dist/material-ui.css">
<script type="module">
  import { init } from '/node_modules/@chloerei/material-ui/dist/material-ui.bundle.js'
  init()
</script>
```

Or use with bundle tool:

```scss
// application.scss
@import '@chloerei/material-ui/dist/material-ui.css';
```

```javascript
// application.js

// Stimulus bundled
import { init } from "@chloerei/material-ui/dist/material-ui.bundle.js"
init()

// or if you are using Stimulus in your application
import { Application } from "stimulus"
const application = Application.start()
import { init } from "@chloerei/material-ui/dist/material-ui.js"
init(application)
```

## CDN

Add this code to your page head:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@chloerei/material-ui@0.0.9/dist/material-ui.css">
<script type="module">
  import { init } from 'https://cdn.jsdelivr.net/npm/@chloerei/material-ui@0.0.9/dist/material-ui.bundle.js'
  init()
</script>
```
