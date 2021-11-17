---
title: Display
---

# Display

## Format

```
.diplay-{value}@{screen}
```

Values:

- none
- inline
- block
- inline-block
- flex
- inline-flex
- grid
- table
- table-row
- table-cell

## Example

{% example %}
<div class="display-block padding-3">
  .display-block
</div>
<div class="display-none padding-3">
  .display-none
</div>
<div class="display-none display-block@tablet padding-3">
  .display-none@phone
</div>
<div class="display-none@desktop padding-3">
  .display-none@desktop
</div>
{% endexample %}
