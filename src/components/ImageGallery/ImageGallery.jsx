// import PropTypes from 'prop-types';
import React from 'react';
import 'styles/styles.css';

const ImageGallery = ({ children }) => {
  return <ul className="ImageGallery">{children}</ul>;
};

// Contacts.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.exact({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
// };

export default ImageGallery;
