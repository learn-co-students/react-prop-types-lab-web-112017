// Code Product Component Here
import React from 'react'
import PropTypes from 'prop-types';

class Product extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <h1>{this.props.producer}</h1>
        <h1>{this.props.hasWatermark}</h1>
        <h1>{this.props.color}</h1>
        <h1>{this.props.weight}</h1>
      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: function(props, propName) {
    let value = props[propName]

    if (value === undefined) {
      return new Error('Weight is undefined.')
    }

    if (isNaN(value)) {
      return new Error('Weight is not a number')
    }

    let isValid = (value > 80 && value < 300)
    if (!isValid) {
      return new Error('Weight is invalid!')
    }
  }
};

export default Product
