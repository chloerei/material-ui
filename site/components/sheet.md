---
title: Sheet
---

# Sheet

## Standard

{% example sandbox %}
<div class="display-flex">
  <div class="flex-grow-1">
    <div class="top-app-bar top-app-bar--sticky-top">
      <div class="top-app-bar__title">
        Title
      </div>
      <div class="top-app-bar__action display-none@laptop">
        <label for="standard-sheet-toggle" class="button button--icon">
          <span class="material-icons">info</span>
        </label>
      </div>
    </div>
    <div class="padding">
      Main Content
    </div>
  </div>

  <input type="checkbox" id="standard-sheet-toggle" class="sheet-toggle">
  <div id="sheet-permanently" class="sheet" data-controller="sheet">
    <div class="sheet__container">
      <div class="padding">
        Sheet Content
      </div>
    </div>
    <label for="standard-sheet-toggle" class="sheet__scrim">
    </label>
  </div>
</div>
{% endexample %}

## Modal

{% example sandbox %}
<div class="top-app-bar top-app-bar--sticky-top">
  <div class="top-app-bar__title">
    Title
  </div>
  <div class="top-app-bar__action">
    <label for="modal-sheet-toggle" class="button button--icon">
      <span class="material-icons">info</span>
    </label>
  </div>
</div>

<div class="padding">
  Main Content
</div>

<input type="checkbox" id="modal-sheet-toggle" class="sheet-toggle">
<div id="sheet-modal" class="sheet sheet--modal">
  <div class="sheet__container">
    <div class="padding">
      Sheet Content
    </div>
  </div>
  <label for="modal-sheet-toggle" class="sheet__scrim">
  </label>
</div>
{% endexample %}
