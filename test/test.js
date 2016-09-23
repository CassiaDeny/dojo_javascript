'use strict';
const chai = require('chai').should();


describe("Essa é nossa suit de testes", function () {
  describe("Assume que isso é muito legal", function(){
    it('deve passar esse teste', function(){
      var trem = "ola"
      trem.should.equal('ola');
    });
  });
});