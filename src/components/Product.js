// Code Product Component Here
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render() {
    return (<div>
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
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: weightRange
}

function weightRange(props, propName, componentName) {
  if (props[propName]) {
    let value = props[propName]
    if (typeof value === "number") {
      return (value > 79 && value < 301) ? null : new Error('bad weight value')
    } else {
      return new Error('must be a number')
    }
  }
  return new Error('must provide number')
}

export default Product;
