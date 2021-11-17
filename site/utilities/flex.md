---
title: Flex
---

# Flex

## Direction

Format:

```
.flex-direction-{value}
```

Values:

- row
- row-reverse
- column
- column-reverse

Example:

{% example %}
<div class="display-flex flex-direction-row-reverse">
  <div class="padding-3 margin-3 background-primary">
    column 1
  </div>
  <div class="padding-3 margin-3 background-primary">
    column 2
  </div>
  <div class="padding-3 margin-3 background-primary">
    column 3
  </div>
</div>
{% endexample %}

## Wrap

Format:

```
.flex-{value}
```

Values:

- nowrap
- wrap
- wrap-reverse

Example:

{% example %}
<div class="display-flex flex-wrap">
  <div class="padding-3 background-primary" style="width: 50%;">
    column 1
  </div>
  <div class="padding-3 background-primary" style="width: 50%;">
    column 2
  </div>
  <div class="padding-3 background-primary" style="width: 50%;">
    column 3
  </div>
</div>
{% endexample %}

## Justify Content

Format:

```
.justify-content-{value}
```

Values:

- flex-start
- flex-end
- center
- space-between
- space-around
- space-evenly

Example:

{% example %}
<div class="display-flex justify-content-center">
  <div class="padding-3 margin-3 background-primary">
    column 1
  </div>
  <div class="padding-3 margin-3 background-primary">
    column 2
  </div>
  <div class="padding-3 margin-3 background-primary">
    column 3
  </div>
</div>
{% endexample %}

## Align Items

Format:

```
.align-items-{value}
```

Values:

- flex-start
- flex-end
- center
- stretch
- baseline

Example:

{% example %}
<div class="display-flex align-items-center" style="height: 200px;">
  <div class="padding-3 margin-3 background-primary">
    column 1
  </div>
  <div class="padding-3 margin-3 background-primary">
    column 2
  </div>
  <div class="padding-3 margin-3 background-primary">
    column 3
  </div>
</div>
{% endexample %}

## Align Content

Format:

```
.align-content-{value}
```

Values:

- flex-start
- flex-end
- center
- stretch
- space-between
- space-around

Example:

{% example %}
<div class="display-flex flex-wrap align-content-center" style="height: 200px;">
  <div class="padding-3 background-primary" style="width: 50%;">
    column 1
  </div>
  <div class="padding-3 background-primary" style="width: 50%;">
    column 2
  </div>
  <div class="padding-3 background-primary" style="width: 50%;">
    column 3
  </div>
</div>
{% endexample %}

## Gap

Format:

```
.gap-{0..5}
```

Example:

{% example %}
<div class="display-flex gap-3">
  <div class="padding-3 background-primary">
    column 1
  </div>
  <div class="padding-3 background-primary">
    column 2
  </div>
  <div class="padding-3 background-primary">
    column 3
  </div>
</div>
{% endexample %}

## Align Self

Format:

```
.align-self-${value}
```

Values:

- flex-start
- flex-end
- center
- baseline
- stretch

Example:

{% example %}
<div class="display-flex" style="height: 200px;">
  <div class="padding-3 background-primary align-self-flex-start">
    column 1
  </div>
  <div class="padding-3 background-primary align-self-center">
    column 2
  </div>
  <div class="padding-3 background-primary align-self-flex-end">
    column 3
  </div>
</div>
{% endexample %}

## Responsive

Add `@{screen}` after class name.

Example:

{% example %}
<div class="display-flex flex-direction-column flex-direction-row@laptop">
  <div class="padding-3 background-primary">
    column 1
  </div>
  <div class="padding-3 background-primary">
    column 2
  </div>
  <div class="padding-3 background-primary">
    column 3
  </div>
</div>
{% endexample %}
