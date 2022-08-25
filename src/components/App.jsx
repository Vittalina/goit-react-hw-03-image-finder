import { Component } from 'react';
import '../styles/styles.css';
import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Button from 'components/Button/Button';
// import Loader from 'components/Loader/Loader';
// import Modal from 'components/Modal/Modal';

class App extends Component {
  state = {
    gallery: [],
    searchQueryPicture: '',
    page: 1,
    perPage: 12,
    total: '',
    loading: false,
  };

  componentDidMount() {
    this.setState({ loading: true });
    const BASE_URL = 'https://pixabay.com/api/';
    const MY_API_KEY = '28384939-76d0db34094acd1949cd365d2';

    // const response =
    fetch(
      `${BASE_URL}?key=${MY_API_KEY}&q=${this.state.searchQueryPicture}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${this.state.perPage}&page=${this.state.page}`
    )
      .then(response => response.json())
      .then(data =>
        this.setState({
          gallery: [...data.hits],
          total: data.totalHits,
        })
      )
      .finally(() => this.setState({ loading: false }));
  }

  componentDidUpdate(prevProps, prevState) {}

  onSubmit = () => {
    this.setState(prevState => ({
      searchQueryPicture: prevState.value,
    }));
  };

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.onSubmit} />
        {this.state.loading && <h1>Loading...</h1>}
        <ImageGallery>
          <ImageGalleryItem galleryItems={this.state.gallery} />
        </ImageGallery>
        <Button />
      </div>
    );
  }
}

export default App;
