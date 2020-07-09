import { EasingFunctions } from './animation';

const requestAnimationFrame =
	window.requestAnimationFrame ||
	window.webkitRequestAnimationFrame ||
	window.mozRequestAnimationFrame ||
	window.oRequestAnimationFrame ||
	window.msRequestAnimationFrame;

// Stack Overflow: https://stackoverflow.com/a/54971309
export const smoothScrollTo = function (to) {
	const start = window.scrollY || window.pageYOffset;
	const time = Date.now();
	const duration = Math.abs(start - to) / 3;

	(function step() {
		var dx = Math.min(1, (Date.now() - time) / duration);
		var pos = start + (to - start) * EasingFunctions.easeOutQuart(dx);

		window.scrollTo(0, pos);

		if (dx < 1) {
			requestAnimationFrame(step);
		}
	})();
};
