---
title: Radio
---

# Radio

{% example %}
<div class="display-flex align-items-center">
  <label class="radio">
    <input type="radio" id="radio_1" name="radio_group" value="" checked>
    <div class="radio__icon">
    </div>
  </label>
  <label for="radio_1" class="label-large margin-left-2">checked</label>
</div>
<div class="display-flex align-items-center">
  <label class="radio">
    <input type="radio" id="radio_2" name="radio_group" value="">
    <div class="radio__icon">
    </div>
  </label>
  <label for="radio_2" class="label-large margin-left-2">unchecked</label>
</div>
<div class="display-flex align-items-center">
  <label class="radio radio--disabled">
    <input type="radio" id="radio_3" name="radio_group_2" value="" disabled checked>
    <div class="radio__icon">
    </div>
  </label>
  <label for="radio_3" class="label-large margin-left-2">checked disabled</label>
</div>
<div class="display-flex align-items-center">
  <label class="radio radio--disabled">
    <input type="radio" id="radio_4" name="radio_group_2" value="" disabled>
    <div class="radio__icon">
    </div>
  </label>
  <label for="radio_4" class="label-large margin-left-2">disabled</label>
</div>
{% endexample %}
