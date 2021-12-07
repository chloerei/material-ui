---
layout: default
title: Introduction
---

# Introduction

## Material Design

Material UI is based on Material Design, which is a well-designed design specification applicable for multiple devices.

You can read the Material Design specifications here: https://material.io/ .

Current Material UI follows Material Design V3.

## CSS

Material UI follows the BEM naming convention, which means that CSS classes are modular, avoid naming conflicts. You can intuitively understand the meaning of CSS classes.

A typical BEM naming example is as follows:

```css
.block { }
.block__element { }
.block__element--modifier { }
```

You can learn more about BEM rules from here: http://getbem.com/ .

## JavaScript

Material UI requires JavaScript to implement some interactive operations, such as dropdown, dialog.

It depends on the [Stimulus](https://stimulusjs.org/) framework, which is a front-end framework friendly with server rendering.

A typical stimulus component is as follows:

{% example %}
<div class="dropdown" data-controller="dropdown">
  <button type="button" class="button button--filled" data-action="dropdown#toggle">Toggle Menu</button>
  <div class="dropdown__container">
    <div class="dropdown__item">Item</div>
    <div class="dropdown__item">Item</div>
    <div class="dropdown__item">Item</div>
  </div>
</div>
{% endexample %}

Look at two attributes `data-controller` and `data-action`, which specify the module to which the action belongs and what actions are implemented when triggered.

Material UI provides two js files, one bundles stimulus and one does not.

If you don’t want to worry about stimulus, use `dist/js/campo-ui.bundle.js`.

If you also use stimulus, use `dist/js/campo-ui.js` to avoid duplicate require Stimlus.

For more about the config of the front-end packaging tool, please read [Installation](/installation.html).

## Icon

Material UI works well with [Material Icons](https://fonts.google.com/icons?selected=Material+Icons):

{% example %}
<button type="button" class="button button--icon">
  <span class="material-icons">edit</span>
</button>
{% endexample %}

Or use svg format icon:

{% example %}
<button type="button" class="button button--icon">
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
</button>
{% endexample %}
