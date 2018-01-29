// Code Product Component Here
import React from 'react'
import PropTypes from 'prop-types'

class Product extends React.Component {
  render() {
    return(
      <div>
        {typeof this.props.weight}
      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false
}

function weightCheck(props, propName, componentName) {
  let value = props[propName]

  if (value === undefined) {
    return new Error("The weight prop is required.")
  }

  if (typeof value !== "number") {
    return new Error("The weight prop is not a number.")
  }

  if (!(value > 80 && value < 300)) {
    return new Error("The weight prop should range between 80 and 300.")
  }
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: weightCheck

}

export default Product;
