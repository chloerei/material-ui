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
<div class="display-none display-block@medium padding-3">
  .display-none@medium
</div>
<div class="display-none@large padding-3">
  .display-none@large
</div>
{% endexample %}
