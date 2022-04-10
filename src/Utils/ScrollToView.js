export default function ScrollToView(scrollToId) {
	const element = document.getElementById(scrollToId);
	const offset = 85;
	const bodyRect = document.body.getBoundingClientRect().top;
	const elementRect = element.getBoundingClientRect().top;
	const elementPosition = elementRect - bodyRect;
	const offsetPosition = elementPosition - offset;
	window.scrollTo({
		top: offsetPosition,
		behavior: "smooth",
	});
}
