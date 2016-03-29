/*jshint expr: true*/

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;
var should = chai.should(); // yes, actually call the function

var inspect = require('eyes').inspector({ maxLength: 1000000 });

var fs = require('fs');

describe('yaarb',function() {

	var Y = require('../lib/yaarb');

	var t;

	beforeEach(function () {
		t = new Y();
	});

	it('instantiate',function() {
		expect(t).to.exist;
	});

	it('empty',function() {
		expect(t.empty()).to.equal(true);
	});

	it('size',function() {
		expect(t.size()).to.equal(0);
	});
});
