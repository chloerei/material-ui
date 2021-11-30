---
title: Selector
---

# Selector

Selector is a JavaScript component, support options filter and chip style value display.

## Signle

{% example %}
<div class="selector" data-controller="selector">
  <select>
    <option value="Ruby">Ruby</option>
    <option value="Python">Python</option>
    <option value="JavaScript">JavaScript</option>
    <option value="CSS">CSS</option>
    <option value="HTML">HTML</option>
  </select>
</div>
{% endexample %}

## Creatable

{% example %}
<div class="selector" data-controller="selector" data-selector-creatable-value="true">
  <select>
    <option value="Ruby" selected>Ruby</option>
    <option value="Python">Python</option>
    <option value="JavaScript">JavaScript</option>
    <option value="CSS">CSS</option>
    <option value="HTML">HTML</option>
  </select>
</div>
{% endexample %}

## Multiple

{% example %}
<div class="selector selector--filled" data-controller="selector" data-selector-max-items-value="3">
  <select multiple>
    <option value="Ruby" selected>Ruby</option>
    <option value="Python" selected>Python</option>
    <option value="JavaScript">JavaScript</option>
    <option value="CSS">CSS</option>
    <option value="HTML">HTML</option>
  </select>
</div>
{% endexample %}

## Placeholder

{% example %}
<div class="selector selector--filled" data-controller="selector" data-selector-placeholder-value="Add tag...">
  <select multiple>
    <option value="Ruby">Ruby</option>
    <option value="Python">Python</option>
    <option value="JavaScript">JavaScript</option>
    <option value="CSS">CSS</option>
    <option value="HTML">HTML</option>
  </select>
</div>
{% endexample %}

## Style

Selector can be used as text-field input.

### Filled Text Field

{% example %}
<div class="text-field text-field--filled">
  <div class="text-field__container">
    <div class="selector text-field__input" data-controller="selector" data-selector-placeholder-value="Tag..." data-selector-creatable-value="true" data-selector-max-items-value="5">
      <select multiple>
        <option value="Ruby" selected>Ruby</option>
        <option value="Python" selected>Python</option>
        <option value="JavaScript">JavaScript</option>
        <option value="CSS">CSS</option>
        <option value="HTML">HTML</option>
      </select>
    </div>
    <label class="text-field__label">Label</label>
  </div>
  <div class="text-field__helper-text">
    Helper text.
  </div>
</div>
{% endexample %}

### Outlined Text Field

{% example %}
<div class="text-field text-field--outlined">
  <div class="text-field__container">
    <div class="selector text-field__input" data-controller="selector" data-selector-placeholder-value="Tag..." data-selector-creatable-value="true" data-selector-max-items-value="5">
      <select multiple>
        <option value="Ruby" selected>Ruby</option>
        <option value="Python" selected>Python</option>
        <option value="JavaScript">JavaScript</option>
        <option value="CSS">CSS</option>
        <option value="HTML">HTML</option>
      </select>
    </div>
    <label class="text-field__label">Label</label>
  </div>
  <div class="text-field__helper-text">
    Helper text.
  </div>
</div>
{% endexample %}

### Custom

{% example %}
<div class="display-flex padding-x-3 align-items-center border-top border-bottom">
  <label>Label</label>
  <div class="selector" data-controller="selector" data-selector-creatable-value="true" data-selector-max-items-value="5">
    <select multiple>
      <option value="Ruby" selected>Ruby</option>
      <option value="Python" selected>Python</option>
      <option value="JavaScript">JavaScript</option>
      <option value="CSS">CSS</option>
      <option value="HTML">HTML</option>
    </select>
  </div>
</div>
{% endexample %}
