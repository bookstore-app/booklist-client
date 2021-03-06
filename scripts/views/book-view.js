'use strict';

var app = app || {};

(function (module) {
  const booksView = {};

  function showNav(section) {
    console.log('hello from the nav');
    $('section').not(`${section}`).hide();
    $(`${section}`).show();
  }

  booksView.initIndexPage = function (ctx) {
    console.log('hello from initIndexPage', app.Book.all);
    $('#displayBooks').empty();
    showNav('nav');
    $('#displayBooks').show();
    app.Book.all.forEach(book =>
      $('#displayBooks').append(book.toHtml())
    );
  };

  booksView.initAddPage = function (ctx) {
    console.log('add');
    showNav('add');
  };

  booksView.initBookPage = function (ctx) {
    console.log('view book', ctx.params.id);
    $('#singleBook').empty();
    showNav('nav');
    $('#singleBook').show();
    app.Book.all.forEach(book => {
      console.log(ctx.params.id);

      if (parseInt(book.book_id) === parseInt(ctx.params.id)) {
        let template = Handlebars.compile($('#selectOneBook').text());
        $('#singleBook').append(template(book));
        //   $('#singleBook').append(book.selectBook());
        // console.log('inside', $('#singleBook'));


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


// $(document).ready(function() {
//   app.Book.fetchAll(app.booksView.initIndexPage);
// });