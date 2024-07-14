---
title: Spacing
---

# Spacing

Format:

```
.{margin|padding}-{x|y|top|left|right|bottom}-{0..5}
```

Example:

{% example %}
<div class="padding-3 background-primary">
  padding-3
</div>
{% endexample %}

## Responsive

Add `@{screen}` after class name.

Example:

{% example %}
<div class="padding-3 padding-4@large background-primary">
  Content
</div>
{% endexample %}
