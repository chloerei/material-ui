---
title: Text Field
---

# Text Field

In order to work with floating label, `placeholder=" "` attribute must be set in input element, and the content of `placeholder` attribute will not visible.

## Filled

{% example %}
<div class="text-field text-field--filled">
  <div class="text-field__container">
    <input class="text-field__input" type="text" name="" value="" placeholder=" ">
    <label class="text-field__label">Label</label>
  </div>
  <div class="text-field__helper-text">
    helper text
  </div>
</div>

<br>

<div class="text-field text-field--filled text-field--error">
  <div class="text-field__container">
    <input class="text-field__input" type="text" name="" value="" placeholder=" ">
    <label class="text-field__label">Label</label>
  </div>
  <div class="text-field__helper-text">
    error text
  </div>
</div>

<br>

<div class="text-field text-field--filled text-field--with-leading-icon">
  <div class="text-field__container">
    <div class="text-field__leading-icon">
      <span class="material-icons">edit</span>
    </div>
    <input class="text-field__input" type="text" name="" value="" placeholder=" ">
    <label class="text-field__label">Label</label>
  </div>
</div>

<br>

<div class="text-field text-field--filled text-field--with-trailing-icon">
  <div class="text-field__container">
    <input class="text-field__input" type="text" name="" value="" placeholder=" ">
    <div class="text-field__trailing-icon">
      <span class="material-icons">edit</span>
    </div>
    <label class="text-field__label">Label</label>
  </div>
</div>

<br>

<div class="text-field text-field--filled text-field--with-prefix-text">
  <div class="text-field__container">
    <label class="text-field__prefix-text">
      $
    </label>
    <input class="text-field__input" type="text" name="" value="" placeholder=" ">
    <label class="text-field__label">Label</label>
  </div>
</div>

<br>

<div class="text-field text-field--filled text-field--with-suffix-text">
  <div class="text-field__container">
    <input class="text-field__input" type="text" name="" value="" placeholder=" " class="text-align-right">
    <label class="text-field__suffix-text">
      @example.com
    </label>
    <label class="text-field__label">Label</label>
  </div>
</div>

<br>

<div class="text-field text-field--filled">
  <div class="text-field__container">
    <textarea class="text-field__input" placeholder=" " rows="4"></textarea>
    <label class="text-field__label">Textarea</label>
  </div>
</div>

<br>

<div class="text-field text-field--filled">
  <div class="text-field__container">
    <select class="text-field__input">
      <option>Option 1</option>
      <option>Option 2</option>
      <option>Option 3</option>
    </select>
    <label class="text-field__label">Select</label>
  </div>
</div>
{% endexample %}

## Outlined

{% example %}
<div class="text-field text-field--outlined">
  <div class="text-field__container">
    <input class="text-field__input" type="text" name="" value="" placeholder=" ">
    <label class="text-field__label">Label</label>
  </div>
  <div class="text-field__helper-text">
    helper text
  </div>
</div>

<br>

<div class="text-field text-field--outlined text-field--error">
  <div class="text-field__container">
    <input class="text-field__input" type="text" name="" value="" placeholder=" ">
    <label class="text-field__label">Label</label>
  </div>
  <div class="text-field__helper-text">
    error text
  </div>
</div>

<br>

<div class="text-field text-field--outlined text-field--with-leading-icon">
  <div class="text-field__container">
    <div class="text-field__leading-icon">
      <span class="material-icons">edit</span>
    </div>
    <input class="text-field__input" type="text" name="" value="" placeholder=" ">
    <label class="text-field__label">Label</label>
  </div>
</div>

<br>

<div class="text-field text-field--outlined text-field--with-trailing-icon">
  <div class="text-field__container">
    <input class="text-field__input" type="text" name="" value="" placeholder=" ">
    <div class="text-field__trailing-icon">
      <span class="material-icons">edit</span>
    </div>
    <label class="text-field__label">Label</label>
  </div>
</div>

<br>

<div class="text-field text-field--outlined text-field--with-prefix-text">
  <div class="text-field__container">
    <label class="text-field__prefix-text">
      $
    </label>
    <input class="text-field__input" type="text" name="" value="" placeholder=" ">
    <label class="text-field__label">Label</label>
  </div>
  <div class="text-field__helper-text">
    helper text
  </div>
</div>

<br>

<div class="text-field text-field--outlined text-field--with-suffix-text">
  <div class="text-field__container">
    <input class="text-field__input" type="text" name="" value="" placeholder=" " class="text-align-right">
    <label class="text-field__suffix-text">
      @example.com
    </label>
    <label class="text-field__label">Label</label>
  </div>
  <div class="text-field__helper-text">
    helper text
  </div>
</div>

<br>

<div class="text-field text-field--outlined">
  <div class="text-field__container">
    <textarea class="text-field__input" placeholder=" " rows="4"></textarea>
    <label class="text-field__label">Textarea</label>
  </div>
</div>

<br>

<div class="text-field text-field--outlined">
  <div class="text-field__container">
    <select class="text-field__input">
      <option>Option 1</option>
      <option>Option 2</option>
      <option>Option 3</option>
    </select>
    <label class="text-field__label">Select</label>
  </div>
</div>
{% endexample %}
