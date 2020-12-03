---
title: Table
---

<h1>Table</h1>

{% example %}
<table class="table">
  <thead>
    <tr>
      <th>header</th>
      <th>header</th>
      <th>header</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>column</td>
      <td>column</td>
      <td>column</td>
    </tr>
    <tr>
      <td>column</td>
      <td>column</td>
      <td>column</td>
    </tr>
    <tr>
      <td>column</td>
      <td>column</td>
      <td>column</td>
    </tr>
  </tbody>
</table>

{% endexample %}

## Flex row with row link

For alignment, the column width needs to be specified individually.

{% example %}
<table class="table">
  <thead>
    <tr class="flex position-relative">
      <th class="table__cell--action">
        <label class="button button--icon">
          <input type="checkbox">
        </label>
      </th>
      <th>header</th>
      <th class="flex-grow-1">header</th>
      <th>header</th>
    </tr>
  </thead>
  <tbody>
    <tr class="flex position-relative">
      <td class="table__cell--action">
        <a href="#" class="stretched-link"></a>
        <label class="button button--icon">
          <input type="checkbox">
        </label>
      </td>
      <td>column</td>
      <td class="flex-grow-1">column</td>
      <td>column</td>
    </tr>
    <tr class="flex position-relative">
      <td class="table__cell--action">
        <a href="#" class="stretched-link"></a>
        <label class="button button--icon">
          <input type="checkbox">
        </label>
      </td>
      <td>column</td>
      <td class="flex-grow-1">column</td>
      <td>column</td>
    </tr>
    <tr class="flex position-relative">
      <td class="table__cell--action">
        <a href="#" class="stretched-link"></a>
        <label class="button button--icon">
          <input type="checkbox">
        </label>
      </td>
      <td>column</td>
      <td class="flex-grow-1">column</td>
      <td>column</td>
    </tr>
  </tbody>
</table>
{% endexample %}
