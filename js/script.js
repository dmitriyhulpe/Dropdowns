const link = document.getElementsByClassName('link');

for (const index of link) {
	index.addEventListener('click', function() {
		let arrow = index.nextElementSibling;
	
		if (arrow) {
			arrow.classList.toggle('active');
			let menu = arrow.nextElementSibling;
			menu.classList.toggle('open');
		}
	});
}