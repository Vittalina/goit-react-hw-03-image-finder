import { Component } from 'react';
import '../styles/styles.css';
import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Button from 'components/Button/Button';
// import Loader from 'components/Loader/Loader';
// import Modal from 'components/Modal/Modal';
import response from '../services/api';

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
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.page !== this.state.page ||
      prevState.searchQueryPicture !== this.state.searchQueryPicture
    ) {
      this.setState({ loading: false });

      // response(this.state.searchQueryPicture, this.state.page);
    }
    console.log(this.state.searchQueryPicture);
    console.log(this.state.page);
  }

  onSubmit = searchQueryPicture => {
    this.setState({ searchQueryPicture, loading: true });

    response(searchQueryPicture, this.state.page).then(data =>
      this.setState({
        gallery: [...data.hits],
        total: data.totalHits,
      })
    );
  };

  onLoadMoreBtn = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
      loading: true,
    }));
  };

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.onSubmit} />
        {/* {this.state.loading && <h1>Loading...</h1>} */}
        {/* {this.state.loading && <Loader />} */}

        {/* {this.state.gallery.length > 0 && ( */}
        <ImageGallery>
          <ImageGalleryItem galleryItems={this.state.gallery} />
        </ImageGallery>
        {/* )} */}
        <Button onClick={this.onLoadMoreBtn} />
      </div>
    );
  }
}

export default App;