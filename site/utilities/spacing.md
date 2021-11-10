---
title: Spacing
---

# Spacing

## Format

```
.{margin|padding}-{x|y|top|left|right|bottom}-{0..5}
```

## Example

```
.padding-left-3
```

## Spacer

`$spacer` is 16px by default;

| Name | Size           |
| ---- | -------------- |
| 0    | $spacer * 0    |
| 1    | $spacer * 0.25 |
| 2    | $spacer * 0.5  |
| 3    | $spacer * 1    |
| 4    | $spacer * 2    |
| 5    | $spacer * 3    |



{% example %}
<div class="padding-3">
  padding-3
</div>
<div class="padding-x-3">
  padding-x-3
</div>
<div class="margin-3">
  margin-3
</div>
<div class="margin-x-3">
  margin-x-3
</div>
{% endexample %}
