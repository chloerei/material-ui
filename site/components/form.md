---
title: Form
---

# Form

{% example %}
<form class="form">
  <div class="form__field">
    <div class="text-field text-field--filled">
      <div class="text-field__container">
        <input type="text" name="" value="" placeholder=" ">
        <label class="text-field__label">Text Field</label>
      </div>
    </div>
  </div>
  <div class="form__row">
    <div class="form__field">
      <div class="text-field text-field--filled">
        <div class="text-field__container">
          <input type="text" name="" value="" placeholder=" ">
          <label class="text-field__label">Text Field</label>
        </div>
      </div>
    </div>
    <div class="form__field">
      <div class="text-field text-field--filled">
        <div class="text-field__container">
          <input type="text" name="" value="" placeholder=" ">
          <label class="text-field__label">Text Field</label>
        </div>
      </div>
    </div>
  </div>
  <div class="form__field">
    <div class="text-field text-field--filled">
      <div class="text-field__container">
        <textarea name="name" rows="8" cols="80" placeholder=" "></textarea>
        <label class="text-field__label">Text Field</label>
      </div>
    </div>
  </div>
  <div class="form__field">
    <label class="form__label">Checkbox</label>
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
  </div>
  <div class="form__field">
    <label class="form__label">Radio</label>
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
  </div>
  <div class="form__field">
    <label class="form__label">Switch</label>
    <div class="form__control">
      <label class="form__control__label" for="switch_1">Switch</label>
      <label class="switch">
        <input id="switch_1" type="checkbox" name="" value="">
        <div class="switch__track">
        </div>
        <div class="switch__thumb">
        </div>
      </label>
    </div>
  </div>
  <button type="submit" name="button" class="button button--contained button--primary">Submit</button>
</form>
{% endexample %}
