'use strict';

var app = app || {};

(function (module) {
  const booksView = {};

  function showNav(section) {
    $('section').not(`#${section}`).hide();
    $(`#${section}`).show();
  }

  booksView.initIndexPage = function (ctx) {
    $('items url').empty();
    showNav('items');
    app.Task.all.forEach(task =>
      $('#items ul').apprend(task.toHtml())
    );
  }

  booksView.initAddPage

})(app);