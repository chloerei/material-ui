---
title: Form
---

# Selection control

## Checkbox

{% example %}
<div class="form__field">
  <label class="checkbox">
    <input type="checkbox" id="checkbox_1" name="" value="">
    <div class="checkbox__icon">
      <svg viewBox="0 0 24 24">
        <path fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
      </svg>
    </div>
  </label>
  <label for="checkbox_1" class="checkbox-label">item 1</label>
</div>
<div class="form__field">
  <label class="checkbox">
    <input type="checkbox" id="checkbox_2" name="" value="">
    <div class="checkbox__icon">
      <svg viewBox="0 0 24 24">
        <path fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
      </svg>
    </div>
  </label>
  <label for="checkbox_2" class="checkbox-label">item 2</label>
</div>
{% endexample %}

## Radio button

{% example %}
<div class="form__field">
  <label class="radio">
    <input type="radio" id="radio_1" name="radio_group" value="">
    <div class="radio__uncheck-icon">
      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/></svg>
    </div>
    <div class="radio__checked-icon">
      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/><circle cx="12" cy="12" r="5"/></svg>
    </div>
  </label>
  <label for="radio_1" class="radio-label">item 1</label>
</div>
<div class="form__field">
  <label class="radio">
    <input type="radio" id="radio_2" name="radio_group" value="">
    <div class="radio__uncheck-icon">
      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/></svg>
    </div>
    <div class="radio__checked-icon">
      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/><circle cx="12" cy="12" r="5"/></svg>
    </div>
  </label>
  <label for="radio_2" class="radio-label">item 2</label>
</div>
{% endexample %}

## Switch

{% example %}
<label class="switch">
  <input type="checkbox" name="" value="">
  <div class="switch__track">
  </div>
  <div class="switch__thumb">
  </div>
</label>
{% endexample %}
