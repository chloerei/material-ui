---
title: Position
---

# Position

Format:

```
.position-{value}
.{top,right,bottom,left}-{0..5}
```

Values:

- relative
- absolute
- fixed
- static
- sticky

Example:

{% example %}
<div class="position-relative border" style="height: 200px;">
  <div class="position-absolute padding-1 right-3 bottom-3">
    <button type="button" class="button button--floating-action">
      <span class="material-icons">add</span>
    </button>
  </div>
</div>
{% endexample %}
