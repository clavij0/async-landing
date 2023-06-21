//asyncronizmo

//const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCBVjMGOIkavEAhyqpxJ73Dw&part=snippet%2Cid&order=date&maxResults=9';
const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UC8butISFwT-Wl7EV0hUK0BQ&part=snippet%2Cid&order=date&maxResults=9';
const content = null || document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		//'X-CACHEBYPASS': '@freecodecamp',
		'X-RapidAPI-Key': '06622d0cbcmsh120e8367c438129p100f60jsn6f4c274091f1',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(urlApi){
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}

//Función de autollamado es como en c++ autollamado
(async () => {
    try {
        const videos = await fetchData(API);
        let view = `
            ${videos.items.map(video => `
                <div class="group relative">
                    <div
                        class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                        <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
                    </div>
                    <div class="mt-4 flex justify-between">
                        <h3 class="text-sm text-gray-700">
                        <span aria-hidden="true" class="absolute inset-0"></span>
                        ${video.snippet.title}
                        </h3>
                    </div>
                </div>
            `).slice(0,4).join('')}
        `;
        content.innerHTML = view;
    } catch (error) {
        console.log(error);
    }
})();
// try {
//  const response = await fetch(urlApi, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

