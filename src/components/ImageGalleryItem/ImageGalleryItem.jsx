import PropTypes from 'prop-types';
import React from 'react';
import 'styles/styles.css';

const ImageGalleryItem = ({ galleryItems }) => {
  return (
    <>
      {galleryItems.map(({ id, webformatURL, largeImageURL }) => (
        <li key={id} className="ImageGalleryItem">
          <img src={webformatURL} alt="" className="ImageGalleryItem-image" />
        </li>
      ))}
    </>
  );
};

ImageGalleryItem.propType = {
  galleryItems: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ),
};

export default ImageGalleryItem;
