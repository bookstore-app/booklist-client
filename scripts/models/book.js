'use strict';

var app = app || {};

const ENV = {};

ENV.isProduction = (window.location.protocol === 'https:');
ENV.productionApiUrl = 'https://book-list-collin-max-booklist.herokuapp.com';
ENV.developmentApiUrl = 'http://localhost:3000';
ENV.apiUrl = ENV.isProduction ? ENV.productionApiUrl : ENV.developmentApiUrl;




(function(module) {

  function()

  function errorCallback(err) {
    console.error(err);
    module.errorView.initErrorPage(err);
  }

})(app);

pageXOffset( '/', () => app.Book.fetchAll(app.bookView));

