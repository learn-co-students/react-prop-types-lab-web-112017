import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render() {
    return (
      <div>
        <h2>Name: {this.name}</h2>
        <ul>
          <li>Producer: {this.producer}</li>
          <li>Watermark: {this.hasWatermark}</li>
          <li>Color: {this.color}</li>
          <li>Weight: {this.weight}</li>
        </ul>
      </div>
    );
  }
}

Product.defaultProps = {
  hasWatermark: false
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf([
    'white', 'eggshell-white', 'salmon'
  ]).isRequired,
  weight: function(props, propName) {
    const weight = props[propName];

    if (weight === undefined) {
      return new Error('Weight is required')
    }

    if (isNaN(weight)) {
      return new Error('Weight must be a number')
    }

    if (weight < 81 || weight > 299) {
      return new Error('Weight must be over 80 and under 300')
    }
  },
}

export default Product;
