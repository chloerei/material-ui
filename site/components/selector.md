---
title: Selector
---

# Selector

## Signle

{% example %}
<div class="selector" data-controller="selector" data-selector-placeholder-value="Tag">
  <select class="selector__select" data-selector-target="select">
    <option value="Ruby" selected>Ruby</option>
    <option value="Python">Python</option>
    <option value="JavaScript">JavaScript</option>
    <option value="CSS">CSS</option>
    <option value="HTML">HTML</option>
  </select>
</div>
{% endexample %}

## Single with creatable

{% example %}
<div class="selector" data-controller="selector" data-selector-placeholder-value="Tag..." data-selector-creatable-value="true">
  <select class="selector__select" data-selector-target="select">
    <option value="Ruby" selected>Ruby</option>
    <option value="Python">Python</option>
    <option value="JavaScript">JavaScript</option>
    <option value="CSS">CSS</option>
    <option value="HTML">HTML</option>
  </select>
</div>
{% endexample %}

## Multiple with creatable

{% example %}
<div class="selector" data-controller="selector" data-selector-placeholder-value="Tag..." data-selector-creatable-value="true" data-selector-max-items-value="5">
  <select class="selector__select" multiple data-selector-target="select">
    <option value="Ruby" selected>Ruby</option>
    <option value="Python" selected>Python</option>
    <option value="JavaScript">JavaScript</option>
    <option value="CSS">CSS</option>
    <option value="HTML">HTML</option>
  </select>
</div>
{% endexample %}
