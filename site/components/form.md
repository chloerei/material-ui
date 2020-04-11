---
title: Form
---

# Form

{% example %}
<div class="form">
  <div class="form__field">
    <label>Text Field</label>
    <input type="text" name="" value="">
  </div>
  <div class="form__row">
    <div class="form__field">
      <input type="text" name="" value="">
    </div>
    <div class="form__field">
      <input type="text" name="" value="">
    </div>
  </div>
  <div class="form__field">
    <label>Textarea</label>
    <textarea name="" rows="8" cols="80"></textarea>
  </div>
  <div class="form__field form__field--invalid">
    <label>Invalid</label>
    <input type="text" name="" value="">
    <div class="form__message">
      Form message
    </div>
  </div>
</div>
{% endexample %}
