import { DOM } from '../../helpers/DOM';

const handleClickBlackoverNav = () => {
	if (!!DOM.blackoverNav) {
		DOM.blackoverNav.addEventListener('click', function () {
			DOM.navIcon.classList.remove('active');
			DOM.menu.classList.remove('active');
			this.classList.remove('active');
			DOM.body.classList.remove('active-side');
			DOM.html.classList.remove('overflow-hidden');
		});
	}
};

const blackoverNav = () => {
	handleClickBlackoverNav();
};

export { blackoverNav };
