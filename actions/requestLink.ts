export const requestLink = async (url: string) => {
	return await fetch(url, {
		method: 'GET',
		headers: {
			Accept: '*/*',
			'User-Agent': 'Koushik Puppala (https://koushikpuppala.com)',
		},
	})
}
