import { smoothScrollPage } from './components/smooth-scroll-page/smooth-scroll-page';
import { commentsInit } from './components/comments/comments';
import { searchInit } from './components/search/search';
import { spoilerInit } from './components/spoiler/spoiler';
import { navIcon } from './components/nav-icon/nav-icon';
import { blackoverNav } from './components/blackover-nav/blackover-nav';
import { DOM } from './helpers/DOM';
import { smoothScrollTo } from './helpers/smooth-scroll';

// Document ready
(function (funcName, baseObj) {
	'use strict';
	// The public function name defaults to window.docReady
	// but you can modify the last line of this function to pass in a different object or method name
	// if you want to put them in a different namespace and those will be used instead of
	// window.docReady(...)
	funcName = funcName || 'docReady';
	baseObj = baseObj || window;
	var readyList = [];
	var readyFired = false;
	var readyEventHandlersInstalled = false;

	// call this when the document is ready
	// this function protects itself against being called more than once
	function ready() {
		if (!readyFired) {
			// this must be set to true before we start calling callbacks
			readyFired = true;
			for (var i = 0; i < readyList.length; i++) {
				// if a callback here happens to add new ready handlers,
				// the docReady() function will see that it already fired
				// and will schedule the callback to run right after
				// this event loop finishes so all handlers will still execute
				// in order and no new ones will be added to the readyList
				// while we are processing the list
				readyList[i].fn.call(window, readyList[i].ctx);
			}
			// allow any closures held by these functions to free
			readyList = [];
		}
	}

	function readyStateChange() {
		if (document.readyState === 'complete') {
			ready();
		}
	}

	// This is the one public interface
	// docReady(fn, context);
	// the context argument is optional - if present, it will be passed
	// as an argument to the callback
	baseObj[funcName] = function (callback, context) {
		if (typeof callback !== 'function') {
			throw new TypeError('callback for docReady(fn) must be a function');
		}
		// if ready has already fired, then just schedule the callback
		// to fire asynchronously, but right away
		if (readyFired) {
			setTimeout(function () {
				callback(context);
			}, 1);
			return;
		} else {
			// add the function and context to the list
			readyList.push({ fn: callback, ctx: context });
		}
		// if document already ready to go, schedule the ready function to run
		// IE only safe when readyState is "complete", others safe when readyState is "interactive"
		if (
			document.readyState === 'complete' ||
			(!document.attachEvent && document.readyState === 'interactive')
		) {
			setTimeout(ready, 1);
		} else if (!readyEventHandlersInstalled) {
			// otherwise if we don't have event handlers installed, install them
			if (document.addEventListener) {
				// first choice is DOMContentLoaded event
				document.addEventListener('DOMContentLoaded', ready, false);
				// backup is window load event
				window.addEventListener('load', ready, false);
			} else {
				// must be IE
				document.attachEvent('onreadystatechange', readyStateChange);
				window.attachEvent('onload', ready);
			}
			readyEventHandlersInstalled = true;
		}
	};
})('docReady', window);


// Reset animations on page: body.preload
setTimeout(function () {
	document.body.className = '';
}, 500);

document.addEventListener('keyup', function (event) {
	if (event.keyCode == 27) {
		DOM.navIcon.classList.remove('active');
		DOM.menu.classList.remove('active');
		DOM.blackoverNav.classList.remove('active');
		DOM.body.classList.remove('active-side');
	}
});

// remove all :hover stylesheets on mobile
function hasTouch() {
	return (
		'ontouchstart' in document.documentElement ||
		navigator.maxTouchPoints > 0 ||
		navigator.msMaxTouchPoints > 0
	);
}

if (hasTouch()) {
	try {
		for (var si in document.styleSheets) {
			var styleSheet = document.styleSheets[si];
			if (!styleSheet.rules) continue;

			for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
				if (!styleSheet.rules[ri].selectorText) continue;

				if (styleSheet.rules[ri].selectorText.match(':hover')) {
					styleSheet.deleteRule(ri);
				}
			}
		}
	} catch (ex) {}
}

docReady(function () {
	//Check to see if the window is top if not then display button
	window.addEventListener('scroll', function () {
		const scrollTop = window.pageYOffset || document.body.scrollTop;
		if (!!DOM.scrollTopButton) {
			if (scrollTop > 300) {
				DOM.scrollTopButton.classList.add('active');
			} else {
				DOM.scrollTopButton.classList.remove('active');
			}
		}

		if (!!DOM.backPageButtonDark) {
			if (scrollTop > 130) {
				DOM.backPageButtonDark.classList.remove('back-page-button-w');
			} else {
				DOM.backPageButtonDark.classList.add('back-page-button-w');
			}
		}
	});

	//Click event to scroll to top
	if (!!DOM.scrollTopButton) {
		DOM.scrollTopButton.addEventListener('click', function () {
			smoothScrollTo(0);
		});
	}
});

class App {
	constructor() {
		smoothScrollPage();
		searchInit();
		commentsInit();
		spoilerInit();
		navIcon();
		blackoverNav();
	}

	static init() {
		const app = new App();
		return app;
	}
}

(function () {
	App.init();
})();
