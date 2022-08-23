import { Component } from 'react';
// import { Box } from 'components/Box';
import Searchbar from 'components/Searchbar/Searchbar';
// import ImageGallery from 'components/ImageGallery/ImageGallery';
// import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
// import Loader from 'components/Loader/Loader';
// import Button from 'components/Button/Button';
// import Modal from 'components/Modal/Modal';

class App extends Component {
  state = {
    gallery: [],
    searchQueryPicture: '',
    page: 1,
    perPage: 12,
  };

  componentDidMount() {
    const BASE_URL = 'https://pixabay.com/api/';
    const MY_API_KEY = '28384939-76d0db34094acd1949cd365d2';

    const response = fetch(
      `${BASE_URL}?key=${MY_API_KEY}&q=${this.searchQueryPicture}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${this.perPage}&page=${this.page}`
    ).then(response => response.json);
  }

  componentDidUpdate(prevProps, prevState) {}

  onSubmit = data => {};

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.onSubmit} />
        {/* <ImageGallery> */}
        {/* <ImageGalleryItem /> */}
        {/* </ImageGallery> */}
      </div>
    );
  }
}

export default App;
