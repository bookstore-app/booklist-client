'use strict';

var app = app || {};

const ENV = {};

ENV.isProduction = (window.location.protocol === 'https:');
ENV.productionApiUrl = 'https://book-list-collin-max-booklist.herokuapp.com';
ENV.developmentApiUrl = 'http://localhost:3000';
ENV.apiUrl = ENV.isProduction ? ENV.productionApiUrl : ENV.developmentApiUrl;



(function (module) {

  function Book(obj) {
    Object.assign(this, obj);
  }
  Book.all = [];
  Book.prototype.toHtml = function () {
    let template = Handlebars.compile($('#listOfBooks'));
    return template(this);
  };
  Book.prototype.selectBook = function () {
    let template = Handlebars.compile($('#SelectOneBook'));
    return template(this);
  };
  Book.loadAll = rows => {
    Book.all = rows.map(book => new Book(book));
    console.log(Book.all, 'Loaded all the books');
  };
  Book.fetchAll = callback => {
    // Look into why the ternary is not working
    $.get(`${ENV.developmentApiUrl}/api/v1/books`)
      .then(Book.loadAll)
      .then(callback)
      .catch(console.error('found an error fetching books'));
    // .catch(console.error('found an error fetching books', errCallBack));

  };
  Book.newBook = book => {
    $.post(`${ENV.apiURL}/books/new`, book)
      .then(() => page('/'))
      .catch(errCallBack);
  };
  function errCallBack(err) {
    console.error(err);
    module.errorView.initErrorPage(err);
  }
  module.Book = Book;
})(app);
