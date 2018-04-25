'use strict';

var app = app || {};

(function (module) {
  const booksView = {};

  function showNav(section) {
    console.log('index');
    $('section').not(`#${section}`).hide();
    $(`#${section}`).show();
  }

  booksView.initIndexPage = function (ctx) {
    console.log('index');
    $('items url').empty();
    showNav('items');
    app.Book.all.forEach(book =>
      $('#items ul').apprend(book.toHtml())
    );
  };

  booksView.initAddPage = function (ctx) {
    console.log('add');
    showNav('add');
  };

  booksView.initBookPage = function (ctx) {
    console.log('view book', ctx.params.id);
    $('#book').empty();
    showNav('task');
    app.Book.all.forEach(book => {
      if (parseInt(book.id) === parseInt(ctx.params.id)) {
        $('#book').append(book.detailToHtml());
      }
    });
  };

  $('#add form').on('submit', createNewBook);
  function createNewBook(event) {
    event.preventDefault();
    let book = { book: event.target.book.value };
    $.post(`${ENV.apiUrl}/api/v1/books`, book)
      .then(app.Book.fetchAll(booksView.initIndexPage)
      )
      .catch(console.error);
  }

  module.booksView = booksView;
})(app);