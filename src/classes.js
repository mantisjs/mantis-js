/*
 * Mantis.js
 * Classes - src/classes.js
 */

Mantis.extend({
	addClass: function (value) {
		if (this[0].classList) {
			var v = value.split(' ');

			return this.each(function () {
				var i;

				for (i = 0; i < v.length; i++) {
					this.classList.add(v[i]);
				}
			});
		} else {
			return this.each(function () {
				this.className += (this.className === '') ?
					value : ' ' + value;
			});
		}
	},

	removeClass: function (value) {
		var v = value.split(' ');

		if (this[0].classList) {
			return this.each(function () {
				var i;

				for (i = 0; i < v.length; i++) {
					this.classList.remove(v[i]);
				}
			});
		} else {
			return this.each(function () {
				var c = ' ' + this.className.replace(/[\t\r\n]/g, ' ') + ' ',
					i;

				for (i = 0; i < v.length; i++) {
					while (c.indexOf(' ' + v[i] + ' ') >= 0) {
						c = c.replace(' ' + v[i] + ' ', ' ');
					}
				}

				this.className = c.replace(/^\s+|\s+$/g, '');
			});
		}
	}
});
