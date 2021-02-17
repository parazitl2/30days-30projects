const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = [];
const searchField = document.querySelector('.search');

fetch(endpoint)
	.then((blob) => blob.json())
	.then((data) => cities.push(...data));

function findMatches(wordToMatch, cities) {
	return cities.filter(place => {
		const regex = new RegExp(wordToMatch, 'gi');
		return place.city.match(regex) || place.state.match(regex);
	});
}

function numberWithCommas(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function renderMatches(matches) {
	const list = document.querySelector('.suggestions');

	list.innerHTML = matches
		.map(({ city, state, population }) => {
			const regex = new RegExp(searchField.value, 'gi');
			const cityName = city.replace(regex, `<span class="hl">${searchField.value}</span>`);
			const stateName = state.replace(regex, `<span class="hl">${searchField.value}</span>`);

			return `<li>
				<span class="name">${cityName}, ${stateName}</span>
				<span class="population">${numberWithCommas(population)}</span>
			</li>`
		})
		.join('');
}

searchField.addEventListener('keyup', (e) => {
	const matches = findMatches(searchField.value, cities);
	
	renderMatches(matches);
});