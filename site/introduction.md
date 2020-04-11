---
layout: default
title: Introduction
---

# Introduction

Campo UI is extract from [Campo](https://getcampo.com/), A lightweight web forum. It is expected to be more suitable for other web applications.

## Material Design

Campo UI is based on Material Design, which is a well-designed design specification applicable to a variety of devices.

You can read the Material Design specifications here: https://material.io/ .

## CSS

Campo UI follows the BEM naming convention, which means that CSS classes are modular, avoid naming conflicts. You can intuitively understand the meaning of CSS classes.

A typical BEM naming example is as follows:

```css
.block { }
.block__element { }
.block__element--modifier { }
```

You can learn more about BEM rules from here: http://getbem.com/ .

## JavaScript

Campo UI requires JavaScript to implement some interactive operations, such as dropdown, dialog.

It depends on the [Stimulus](https://stimulusjs.org/) framework, which is a front-end framework that is friendly to server rendering. This framework provides a good API for the component, taking over its life cycle, without worrying about how the component is initialized.

A typical stimulus component is as follows:

{% example %}
<div class="dropdown" data-controller="dropdown">
  <button type="button" class="button button--contained button--primary" data-action="dropdown#toggle">Toggle Menu</button>
  <div class="dropdown__menu">
    <div class="dropdown__item">Item</div>
    <div class="dropdown__item">Item</div>
    <div class="dropdown__item">Item</div>
  </div>
</div>
{% endexample %}

Look at two attributes `data-controller` and `data-action`, which specify the module to which the action belongs and what actions are implemented when triggered.

Campo provides two js files, one bundles stimulus and one does not.

If you don’t want to worry about stimlus, just use `dist/js/campo-ui.bundle.js`.

If you also use stimlus, you should use `dist/js/campo-ui.js` to avoid duplicate require Stimlus.

For more about the config of the front-end packaging tool, please read [Webpack](/webpack.html) and [Ruby on Rails](/rails.html).

## Icon

Campo UI recommends using the inline svg icon to avoid downloading fonts or additional JavaScript initialization.

For example:

{% example %}
<button type="button" class="button button--icon">
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
</button>
{% endexample %}

You can find many Material Design Icons here: https://material.io/resources/icons/

Or you can use any Icon that provides svg format.
