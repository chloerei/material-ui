---
title: Text Field
---

# Text Field

## Filled

{% example %}
<div class="text-field text-field--filled">
  <div class="text-field__container">
    <input type="text" name="" value="" placeholder=" ">
    <label class="text-field__label">Label</label>
  </div>
  <div class="text-field__helper-text">
    helper text
  </div>
</div>

<br>

<div class="text-field text-field--filled text-field--invalid">
  <div class="text-field__container">
    <input type="text" name="" value="" placeholder=" ">
    <label class="text-field__label">Label</label>
  </div>
  <div class="text-field__error-text">
    error text
  </div>
</div>

<br>

<div class="text-field text-field--filled text-field--with-leading-icon">
  <div class="text-field__container">
    <div class="text-field__leading-icon">
      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M16 13h-3c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1zm0-10v1H8V3c0-.55-.45-1-1-1s-1 .45-1 1v1H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-1V3c0-.55-.45-1-1-1s-1 .45-1 1zm2 17H6c-.55 0-1-.45-1-1V9h14v10c0 .55-.45 1-1 1z"/></svg>
    </div>
    <input type="text" name="" value="" placeholder=" ">
    <label class="text-field__label">Label</label>
  </div>
</div>

<br>

<div class="text-field text-field--filled text-field--with-trailing-icon">
  <div class="text-field__container">
    <input type="text" name="" value="" placeholder=" ">
    <div class="text-field__trailing-icon">
      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 4C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 12.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
    </div>
    <label class="text-field__label">Label</label>
  </div>
</div>

<br>

<div class="text-field text-field--filled text-field--with-prefix">
  <div class="text-field__container">
    <label class="text-field__prefix-text">
      $
    </label>
    <input type="text" name="" value="" placeholder=" ">
    <label class="text-field__label">Label</label>
  </div>
</div>

<br>

<div class="text-field text-field--filled text-field--with-suffix">
  <div class="text-field__container">
    <input type="text" name="" value="" placeholder=" " class="text-align-right">
    <label class="text-field__suffix-text">
      @example.com
    </label>
    <label class="text-field__label">Label</label>
  </div>
</div>
{% endexample %}

## Outlined

{% example %}
<div class="text-field text-field--outlined">
  <div class="text-field__container">
    <input type="text" name="" value="" placeholder=" ">
    <label class="text-field__label">Label</label>
  </div>
  <div class="text-field__helper-text">
    helper text
  </div>
</div>

<br>

<div class="text-field text-field--outlined text-field--invalid">
  <div class="text-field__container">
    <input type="text" name="" value="" placeholder=" ">
    <label class="text-field__label">Label</label>
  </div>
  <div class="text-field__error-text">
    error text
  </div>
</div>

<br>

<div class="text-field text-field--outlined text-field--with-leading-icon">
  <div class="text-field__container">
    <div class="text-field__leading-icon">
      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M16 13h-3c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1zm0-10v1H8V3c0-.55-.45-1-1-1s-1 .45-1 1v1H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-1V3c0-.55-.45-1-1-1s-1 .45-1 1zm2 17H6c-.55 0-1-.45-1-1V9h14v10c0 .55-.45 1-1 1z"/></svg>
    </div>
    <input type="text" name="" value="" placeholder=" ">
    <label class="text-field__label">Label</label>
  </div>
</div>

<br>

<div class="text-field text-field--outlined text-field--with-trailing-icon">
  <div class="text-field__container">
    <input type="text" name="" value="" placeholder=" ">
    <div class="text-field__trailing-icon">
      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 4C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 12.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
    </div>
    <label class="text-field__label">Label</label>
  </div>
</div>

<br>

<div class="text-field text-field--outlined text-field--with-prefix">
  <div class="text-field__container">
    <label class="text-field__prefix-text">
      $
    </label>
    <input type="text" name="" value="" placeholder=" ">
    <label class="text-field__label">Label</label>
  </div>
  <div class="text-field__helper-text">
    helper text
  </div>
</div>

<br>

<div class="text-field text-field--outlined text-field--with-suffix">
  <div class="text-field__container">
    <input type="text" name="" value="" placeholder=" " class="text-align-right">
    <label class="text-field__suffix-text">
      @example.com
    </label>
    <label class="text-field__label">Label</label>
  </div>
  <div class="text-field__helper-text">
    helper text
  </div>
</div>
{% endexample %}
