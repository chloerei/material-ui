---
title: Floating Action
---

# Floating Action

## Floating Action base

{% example sandbox %}
<div class="floating-action">
  <button type="button" class="button button--floating button--secondary">
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
  </button>
</div>
{% endexample %}

<h2>Floating Action with Text</h2>

{% example sandbox %}
<div class="floating-action">
  <button type="button" class="button button--floating button--extended button--secondary">
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
    Add
  </button>
</div>
{% endexample %}

## Floating Action with Menu

{% example sandbox %}
<div class="floating-action" data-controller="floating-action">
  <button type="button" class="button button--floating button--secondary" data-action="floating-action#open">
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
  </button>
  <div class="floating-action__menu">
    <a href="#" class="floating-action__item">
      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
      Item
    </a>
    <a href="#" class="floating-action__item">
      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
      Item
    </a>
    <a href="#" class="floating-action__item">
      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
      Item
    </a>
  </div>
</div>
{% endexample %}
