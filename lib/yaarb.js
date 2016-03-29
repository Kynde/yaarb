"use strict";

function Y() {

}

Y.prototype.empty = function() {
	return !this.root;
};

Y.prototype.size = function() {
	// naive at first
	return (this.l?this.l.size():0) + (this.r?this.r.size():0);
};

module.exports = Y;

