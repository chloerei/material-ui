---
title: Color
---

# Color

## Default

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

## Dark theme

Add `.dark-theme` to use dark theme.

<div class="example dark-theme background padding-3">
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

## Custom scheme

Use `color-scheme` mixin to generate custom color scheme:

```scss
.custom-theme {
  @include color-scheme(
    $primary: #3A691E,
    $secondary: #56624D,
    $tertiary: #1E686A,
    $neutral: #596B86,
    $error: #B12825
  );
}
```

```html
<div class="custom-theme">
  ...
</div>
<div class="custom-theme dark-theme">
  ...
</div>
```

<div class="example custom-theme background padding-3">
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

<div class="example custom-theme dark-theme background padding-3">
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
