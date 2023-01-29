

console.log('Hello Lila!');

const apiBaseUrl = 'https://derpibooru.org/api/v1/json';

const images = [];

axios.get(`${apiBaseUrl}/search/images`, {
    params: {
        per_page: 50,
        q: 'pinkie pie',
        page: 0,
        sd: '',
        sf: '',
    }
    })
    .then((response) => {
        if (response.status === 200) {
            if (response.data.images.length > 0) {
            const newImages = response.data.images.map((apiImage) => ({ link: apiImage.view_url, imgSrc: apiImage.respresentations.medium, api: apiImage }));
            images.push(...newImages);
    
            console.log(response);
            } else {
                console.error('Received no images from search');
            }
        } else {
            console.error(`Received response code ${response.status}`);
        }
    })
    .catch((error) => {
        console.error(error);
    });
