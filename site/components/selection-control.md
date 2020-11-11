---
title: Form
---

# Selection control

## Checkbox

{% example %}
<div class="form__control">
  <label class="checkbox">
    <input type="checkbox" id="checkbox_1" name="" value="">
    <div class="checkbox__icon">
      <svg viewBox="0 0 24 24">
        <path fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
      </svg>
    </div>
  </label>
  <label for="checkbox_1" class="form__control__label">item 1</label>
</div>
<div class="form__control">
  <label class="checkbox">
    <input type="checkbox" id="checkbox_2" name="" value="">
    <div class="checkbox__icon">
      <svg viewBox="0 0 24 24">
        <path fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
      </svg>
    </div>
  </label>
  <label for="checkbox_2" class="form__control__label">item 2</label>
</div>
{% endexample %}

## Radio button

{% example %}
<div class="form__control">
  <label class="radio">
    <input type="radio" id="radio_1" name="radio_group" value="">
    <div class="radio__icon">
    </div>
  </label>
  <label for="radio_1" class="form__control__label">item 1</label>
</div>
<div class="form__control">
  <label class="radio">
    <input type="radio" id="radio_2" name="radio_group" value="">
    <div class="radio__icon">
    </div>
  </label>
  <label for="radio_2" class="form__control__label">item 2</label>
</div>
{% endexample %}

## Switch

{% example %}
<div class="form__control">
  <label for="switch_1" class="form__control__label">Switch 1</label>
  <label class="switch">
    <input type="checkbox" id="switch_1" name="" value="">
    <div class="switch__track">
    </div>
    <div class="switch__thumb">
    </div>
  </label>
</div>
{% endexample %}
