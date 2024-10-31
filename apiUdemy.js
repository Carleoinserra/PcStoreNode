
<script>

const url = 'https://udemy-paid-courses-for-free-api.p.rapidapi.com/rapidapi/courses/search?page=1&page_size=10&query=python';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '451870f204msh7b60552d529939fp1ea909jsn6db43b5c7af8',
		'x-rapidapi-host': 'udemy-paid-courses-for-free-api.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}

</script>