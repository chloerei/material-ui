# Toolbar

## Toolbar

{% example %}
<div class="toolbar">
  <div class="toolbar-action">
    <button type="button" class="button button-icon">
      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
    </button>
  </div>
  <div class="toolbar-title">
    Title
  </div>
  <div class="toolbar-action">
    <button type="button" class="button button-icon">
      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
    </button>
  </div>
  <div class="toolbar-action">
    <button type="button" class="button button-icon">
      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/></svg>
    </button>
  </div>
  <div class="toolbar-action dropdown">
    <button type="button" class="button button-icon" data-toggle="dropdown">
      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
    </button>
    <div class="dropdown-menu dropdown-menu-right">
      <a href="#" class="dropdown-menu-item">Item</a>
      <a href="#" class="dropdown-menu-item">Item</a>
      <a href="#" class="dropdown-menu-item">Item</a>
    </div>
  </div>
</div>
{% endexample %}

## Appbar

{% example %}
<div class="appbar">
  <div class="toolbar">
    <div class="toolbar-action">
      <button type="button" class="button button-icon">
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
      </button>
    </div>
    <div class="toolbar-title">
      Title
    </div>
  </div>
</div>

<div class="appbar appbar-primary">
  <div class="toolbar">
    <div class="toolbar-action">
      <button type="button" class="button button-icon">
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
      </button>
    </div>
    <div class="toolbar-title">
      Title
    </div>
  </div>
</div>

<div class="appbar appbar-secondary">
  <div class="toolbar">
    <div class="toolbar-action">
      <button type="button" class="button button-icon">
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
      </button>
    </div>
    <div class="toolbar-title">
      Title
    </div>
  </div>
</div>
{% endexample %}

## Appbar with Tabs

{% example %}
<div class="appbar appbar-primary">
  <div class="toolbar">
    <div class="toolbar-action">
      <button type="button" class="button button-icon">
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
      </button>
    </div>
    <div class="toolbar-title">
      Title
    </div>
  </div>
  <div class="tab">
    <div class="tab-item active">
      Tab Item
    </div>
    <div class="tab-item">
      Tab Item
    </div>
    <div class="tab-item">
      Tab Item
    </div>
  </div>
</div>
{% endexample %}
