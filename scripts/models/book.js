'use strict';

var app = app || {};

const ENV = {};

ENV.isProduction = (window.location.protocol === 'https:');
ENV.productionApiUrl = 'https://ch-ms-booklist.herokuapp.com';
ENV.developmentApiUrl = 'http://localhost:3000';
ENV.apiUrl = ENV.isProduction ? ENV.productionApiUrl : ENV.developmentApiUrl;



(function(module) {
  function errorCallback(err) {
    console.error(err);
    module.errorView.initErrorPage(err);
  }

})(app);