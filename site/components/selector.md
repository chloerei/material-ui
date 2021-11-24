---
title: Selector
---

# Selector

## Signle

{% example %}
<div class="selector selector--filled" data-controller="selector" data-selector-placeholder-value="Select Tag">
  <select>
    <option value="Ruby">Ruby</option>
    <option value="Python">Python</option>
    <option value="JavaScript">JavaScript</option>
    <option value="CSS">CSS</option>
    <option value="HTML">HTML</option>
  </select>
</div>
{% endexample %}

## Single with creatable

{% example %}
<div class="selector selector--filled" data-controller="selector" data-selector-placeholder-value="Tag..." data-selector-creatable-value="true">
  <select>
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
<div class="selector selector--filled" data-controller="selector" data-selector-placeholder-value="Tag..." data-selector-creatable-value="true" data-selector-max-items-value="5">
  <select multiple>
    <option value="Ruby" selected>Ruby</option>
    <option value="Python" selected>Python</option>
    <option value="JavaScript">JavaScript</option>
    <option value="CSS">CSS</option>
    <option value="HTML">HTML</option>
  </select>
</div>
{% endexample %}

## Style

### Filled

{% example %}
<div class="selector selector--filled" data-controller="selector" data-selector-placeholder-value="Tag..." data-selector-creatable-value="true" data-selector-max-items-value="5">
  <select multiple>
    <option value="Ruby" selected>Ruby</option>
    <option value="Python" selected>Python</option>
    <option value="JavaScript">JavaScript</option>
    <option value="CSS">CSS</option>
    <option value="HTML">HTML</option>
  </select>
</div>
{% endexample %}

### Outlined

{% example %}
<div class="selector selector--outlined" data-controller="selector" data-selector-placeholder-value="Tag..." data-selector-creatable-value="true" data-selector-max-items-value="5">
  <select multiple>
    <option value="Ruby" selected>Ruby</option>
    <option value="Python" selected>Python</option>
    <option value="JavaScript">JavaScript</option>
    <option value="CSS">CSS</option>
    <option value="HTML">HTML</option>
  </select>
</div>
{% endexample %}
