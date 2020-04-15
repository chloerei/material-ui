---
title: Card
---

# Card

{% example %}
<div class="card" style="width: 20rem;">
  <div class="card__header">
    <div class="card__header__avatar">
      <img src="/images/avatar.svg">
    </div>
    <div class="card__header__content">
      <h3 class="card__title">Card Title</h3>
      <h4 class="card__subtitle">Card Subtitle</h4>
    </div>
    <div class="card__header__icon">
      <div class="dropdown" data-controller="dropdown">
        <button type="button" class="button button--icon" data-action="dropdown#toggle">
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
        </button>
        <div class="dropdown__menu dropdown__menu--top-right">
          <a href="#" class="dropdown__item">Item</a>
          <a href="#" class="dropdown__item">Item</a>
          <a href="#" class="dropdown__item">Item</a>
        </div>
      </div>
    </div>
  </div>
  <div class="card__media">
    <img src="/images/image.svg">
  </div>
  <div class="card__body text-secondary">
    Content text
  </div>
  <div class="card__footer">
    <button type="button" class="button button--text button--primary">Action 1</button>
    <button type="button" class="button button--text button--primary">Action 2</button>
    <div class="flex-grow">
    </div>
    <button type="button" class="button button--icon">
      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
    </button>
  </div>
</div>
{% endexample %}

<h2>Outlined Card</h2>

{% example %}
<div class="card card--outlined" style="width: 20rem;">
  <div class="card__header">
    <div class="card__header__avatar">
      <img src="/images/avatar.svg">
    </div>
    <div class="card__header__content">
      <h3 class="card__title">Card Title</h3>
      <h4 class="card__subtitle">Card Subtitle</h4>
    </div>
    <div class="card__header__icon">
      <div class="dropdown" data-controller="dropdown">
        <button type="button" class="button button--icon" data-action="dropdown#toggle">
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
        </button>
        <div class="dropdown__menu dropdown__menu--top-right">
          <a href="#" class="dropdown__item">Item</a>
          <a href="#" class="dropdown__item">Item</a>
          <a href="#" class="dropdown__item">Item</a>
        </div>
      </div>
    </div>
  </div>
  <div class="card__media">
    <img src="/images/image.svg">
  </div>
  <div class="card__body text-secondary">
    Content text
  </div>
  <div class="card__footer">
    <button type="button" class="button button--text button--primary">Action 1</button>
    <button type="button" class="button button--text button--primary">Action 2</button>
    <div class="flex-grow">
    </div>
    <button type="button" class="button button--icon">
      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
    </button>
  </div>
</div>
{% endexample %}
