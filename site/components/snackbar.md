---
title: Snackbar
---

# Snackbar

{% example sandbox %}
<div class="snackbar">
  Snackbar content
  <button type="button" class="button button--text button--secondary">Retry</button>
</div>
{% endexample %}

## Disappear Automatically

{% example sandbox %}
<button type="button" id="toggle-snackbar" class="button button--contained button--primary">
  Toggle
</button>
<script type="text/javascript">
  document.querySelector('#toggle-snackbar').addEventListener('click', function() {
    this.insertAdjacentHTML('afterend', `
      <div class="snackbar" data-controller="snackbar" data-snackbar-period="5000">
        Snackbar content
      </div>
    `)
  })
</script>
{% endexample %}
