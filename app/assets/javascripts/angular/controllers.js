'use strict';

angular.module('myNgApp').controller('rootCtrl', function () {

  this.words = [
    {text: 'Hello'},
    {text: 'World'}
  ];

  this.addWord = function () {
    this.words.push({text: 'foo' + this.words.length});
  };

});