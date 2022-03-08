---
title: Color
---

# Color

By default the color scheme is selected according to `prefers-color-scheme`.

## Light

<div class="example background padding-3">
  <div class="display-flex margin-bottom-3">
    <div class="color-primary padding-3 width-25">
      Primary
    </div>
    <div class="color-on-primary padding-3 width-25">
      On Primary
    </div>
    <div class="color-primary-container padding-3 width-25">
      Primary Container
    </div>
    <div class="color-on-primary-container padding-3 width-25">
      On Primary Container
    </div>
  </div>

  <div class="display-flex margin-bottom-3">
    <div class="color-secondary padding-3 width-25">
      Secondary
    </div>
    <div class="color-on-secondary padding-3 width-25">
      On Secondary
    </div>
    <div class="color-secondary-container padding-3 width-25">
      Secondary Container
    </div>
    <div class="color-on-secondary-container padding-3 width-25">
      On Secondary Container
    </div>
  </div>

  <div class="display-flex margin-bottom-3">
    <div class="color-tertiary padding-3 width-25">
      Tertiary
    </div>
    <div class="color-on-tertiary padding-3 width-25">
      On Tertiary
    </div>
    <div class="color-tertiary-container padding-3 width-25">
      Tertiary Container
    </div>
    <div class="color-on-tertiary-container padding-3 width-25">
      On Tertiary Container
    </div>
  </div>

  <div class="display-flex margin-bottom-3">
    <div class="color-error padding-3 width-25">
      Error
    </div>
    <div class="color-on-error padding-3 width-25">
      On Error
    </div>
    <div class="color-error-container padding-3 width-25">
      Error Container
    </div>
    <div class="color-on-error-container padding-3 width-25">
      On Error Container
    </div>
  </div>

  <div class="display-flex margin-bottom-3">
    <div class="color-background padding-3 width-25">
      Background
    </div>
    <div class="color-on-background padding-3 width-25">
      On Background
    </div>
    <div class="color-surface padding-3 width-25">
      Surface
    </div>
    <div class="color-on-surface padding-3 width-25">
      On Surface
    </div>
  </div>

  <div class="display-flex margin-bottom-3">
    <div class="color-surface-variant padding-3 width-25">
      Surface Variant
    </div>
    <div class="color-on-surface-variant padding-3 width-25">
      On Surface Variant
    </div>
    <div class="color-outline padding-3 width-50">
      Outline
    </div>
  </div>
</div>

## Dark

<div class="example dark-scheme background padding-3">
  <div class="display-flex margin-bottom-3">
    <div class="color-primary padding-3 width-25">
      Primary
    </div>
    <div class="color-on-primary padding-3 width-25">
      On Primary
    </div>
    <div class="color-primary-container padding-3 width-25">
      Primary Container
    </div>
    <div class="color-on-primary-container padding-3 width-25">
      On Primary Container
    </div>
  </div>

  <div class="display-flex margin-bottom-3">
    <div class="color-secondary padding-3 width-25">
      Secondary
    </div>
    <div class="color-on-secondary padding-3 width-25">
      On Secondary
    </div>
    <div class="color-secondary-container padding-3 width-25">
      Secondary Container
    </div>
    <div class="color-on-secondary-container padding-3 width-25">
      On Secondary Container
    </div>
  </div>

  <div class="display-flex margin-bottom-3">
    <div class="color-tertiary padding-3 width-25">
      Tertiary
    </div>
    <div class="color-on-tertiary padding-3 width-25">
      On Tertiary
    </div>
    <div class="color-tertiary-container padding-3 width-25">
      Tertiary Container
    </div>
    <div class="color-on-tertiary-container padding-3 width-25">
      On Tertiary Container
    </div>
  </div>

  <div class="display-flex margin-bottom-3">
    <div class="color-error padding-3 width-25">
      Error
    </div>
    <div class="color-on-error padding-3 width-25">
      On Error
    </div>
    <div class="color-error-container padding-3 width-25">
      Error Container
    </div>
    <div class="color-on-error-container padding-3 width-25">
      On Error Container
    </div>
  </div>

  <div class="display-flex margin-bottom-3">
    <div class="color-background padding-3 width-25">
      Background
    </div>
    <div class="color-on-background padding-3 width-25">
      On Background
    </div>
    <div class="color-surface padding-3 width-25">
      Surface
    </div>
    <div class="color-on-surface padding-3 width-25">
      On Surface
    </div>
  </div>

  <div class="display-flex margin-bottom-3">
    <div class="color-surface-variant padding-3 width-25">
      Surface Variant
    </div>
    <div class="color-on-surface-variant padding-3 width-25">
      On Surface Variant
    </div>
    <div class="color-outline padding-3 width-50">
      Outline
    </div>
  </div>
</div>

## ClassName

Use `.light-scheme` or `.dark-scheme` to specify mode:

{% example %}
<div class="light-scheme padding-3 background">
  <button type="button" class="button button--filled">Button</button>
</div>
<div class="dark-scheme padding-3 background">
  <button type="button" class="button button--filled">Button</button>
</div>
{% endexample %}

## Mixin (SCSS)

Generate custom color scheme:

```scss
:root {
  @include color-scheme(
    $primary: #3A691E,
    $secondary: #56624D,
    $tertiary: #1E686A,
    $neutral: #596B86,
    $neutral-variant: #596B86,
    $error: #B12825
  );
}
```

It will generate light and dark scheme.

In addition, light or dark themes can be generated separately.

```scss
.my-light-scheme {
  @include light-scheme(
    $primary: #3A691E,
    $secondary: #56624D,
    $tertiary: #1E686A,
    $neutral: #596B86,
    $neutral-variant: #596B86,
    $error: #B12825
  );
}

.my-dark-scheme {
  @include dark-scheme(
    $primary: #3A691E,
    $secondary: #56624D,
    $tertiary: #1E686A,
    $neutral: #596B86,
    $neutral-variant: #596B86,
    $error: #B12825
  );
}
```
