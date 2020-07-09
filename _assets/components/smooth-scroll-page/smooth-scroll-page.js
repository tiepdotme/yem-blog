import { smoothScrollTo } from '../../helpers/smooth-scroll';

const smoothScrollPage = () => {
	const anchorLink = document.querySelector('a[href*=\\#]:not([href=\\#])');
	setTimeout(function () {
		if (location.hash) {
			/* we need to scroll to the top of the window first, because the browser will always jump to the anchor first before JavaScript is ready, thanks Stack Overflow: http://stackoverflow.com/a/3659116 */
			window.scrollTo(0, 0);
			const target = location.hash.split('#');
			smoothScrollTo(document.querySelector(`#${target[1]}`).offsetTop);
		}
	}, 1);

	if (!!anchorLink) {
		anchorLink.addEventListener('click', function () {
			if (
				location.pathname.replace(/^\//, '') ==
					this.pathname.replace(/^\//, '') &&
				location.hostname == this.hostname
			) {
				smoothScrollTo(
					document.querySelector(`${this.hash}`).offsetTop
				);
				return false;
			}
		});
	}
};

export { smoothScrollPage };
