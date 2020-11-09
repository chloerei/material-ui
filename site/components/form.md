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
    <label class="checkbox">
      <input type="checkbox" name="" value="">
      <span class="checkbox__icon">
      </span>
      Item 1
    </label>
  </div>
  <button type="submit" name="button" class="button button--contained button--primary">Submit</button>
</form>
{% endexample %}
