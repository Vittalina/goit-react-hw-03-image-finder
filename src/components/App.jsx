import { Component } from 'react';
// import { Box } from 'components/Box';
import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
// import Loader from 'components/Loader/Loader';
// import Button from 'components/Button/Button';
// import Modal from 'components/Modal/Modal';

class App extends Component {
  state = {};

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {}

  onSubmit = data => {};

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery>
          <ImageGalleryItem />
        </ImageGallery>
      </div>
    );
  }
}

export default App;
