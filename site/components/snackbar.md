---
title: Snackbar
---

## Snackbar

{% example %}
<div class="snackbar">
  Snackbar content
  <button type="button" class="button button--text button--secondary">Retry</button>
</div>
{% endexample %}

## Position

{% example sandbox %}
<div class="snackbar-container">
  <div class="snackbar">
    Snackbar content
    <button type="button" class="button button--text button--secondary">Retry</button>
  </div>
</div>
{% endexample %}

## Disappear Automatically

{% example sandbox %}
<button type="button" id="toggle-snackbar" class="button button--filled">
  Toggle
</button>
<div id="snackbar-container" class="snackbar-container">
</div>
<script type="text/javascript">
  document.querySelector('#toggle-snackbar').addEventListener('click', function() {
    document.querySelector('#snackbar-container').insertAdjacentHTML('beforeend', `
      <div class="snackbar" data-controller="snackbar" data-snackbar-period="5000">
        Snackbar content
      </div>
    `)
  })
</script>
{% endexample %}
