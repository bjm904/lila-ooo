

console.log('Hello Lila!');

const apiBaseUrl = 'https://derpibooru.org/api/v1/json';

const images = [];

const renderImages = (firstRender) => {
  if (firstRender) {
    
  }
};

const initialize = () => {
  const params = {
    per_page: 50,
    q: 'pinkie pie',
    page: 0,
    sd: '',
    sf: '',
  };

  axios.get(`${apiBaseUrl}/search/images`, { params }).then((response) => {
    if (response.status === 200) {
      if (response.data.images.length > 0) {
      const newImages = response.data.images.map((apiImage) => {
        if (!apiImage) throw new Error();
        return {
          link: apiImage.view_url,
          imgSrc: apiImage.representations.medium,
          api: apiImage,
        };
      });
      images.push(...newImages);

      renderImages(true);

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
};

initialize();
