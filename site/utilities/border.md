---
title: Border
---

# Border

{% example %}
<div class="border padding-3 margin-bottom-3 background-surface">
  .border
</div>
<div class="border-top padding-3 margin-bottom-3 background-surface">
  .border-top
</div>
<div class="border-right padding-3 margin-bottom-3 background-surface">
  .border-right
</div>
<div class="border-bottom padding-3 margin-bottom-3 background-surface">
  .border-bottom
</div>
<div class="border-left padding-3 margin-bottom-3 background-surface">
  .border-left
</div>
{% endexample %}

## Border Radius

{% example %}
<div class="border-radius-0 margin-bottom-3 background-primary" style="height: 100px; width: 200px;">
</div>
<div class="border-radius-1 margin-bottom-3 background-primary" style="height: 100px; width: 200px;">
</div>
<div class="border-radius-2 margin-bottom-3 background-primary" style="height: 100px; width: 200px;">
</div>
<div class="border-radius-3 margin-bottom-3 background-primary" style="height: 100px; width: 200px;">
</div>
<div class="border-radius-4 margin-bottom-3 background-primary" style="height: 100px; width: 200px;">
</div>
<div class="border-radius-5 margin-bottom-3 background-primary" style="height: 100px; width: 200px;">
</div>
<div class="border-radius-circle padding-3 margin-bottom-3 background-primary" style="height: 100px; width: 100px;">
</div>
{% endexample %}

## Responsive

Add `@{screen}` after class name.

{% example %}
<div class="border-radius-2 border-radius-3@large background-primary" style="height: 100px; width: 200px;">
</div>
{% endexample %}
