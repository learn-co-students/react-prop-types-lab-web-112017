// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render () {
    return (
      <div>
      <h1>Product: {this.props.name}</h1>
      <p>Details: </p>
      <ul>
        <li>Producer: {this.props.producer ? this.props.producer : "N/A"} </li>
        <li>Watermark: {this.props.hasWatermark ? "yes" : "no"} </li>
        <li>Color: {this.props.color} </li>
        <li>Weight: {this.props.weight} </li>
      </ul>
      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false,
}




Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: (props, propName) => {
      let value = props[propName];

      if (value === undefined) {
        return new Error(propName + 'is required.')
      }
      if (typeof value === 'number') {
          return (value <= 300 && value >= 80) ? null : new Error(propName + " is not between 80 and 300");
      } else {
        return new Error(propName + 'must be a number')
      }
  }
}


export default Product;
