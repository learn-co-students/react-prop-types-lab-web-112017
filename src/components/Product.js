// Code Product Component Here
import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types';

class Product extends React.Component {
  render () {
    return (
      <div>
        <li>{this.props.name}</li>
        <li>{this.props.producer}</li>
        <li>{this.props.hasWatermark}</li>
        <li>{this.props.color}</li>
        <li>{this.props.weight}</li>
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
  weight: function(props, propName, componentName){
    let value = props[propName]
    if (value === undefined){
      return new Error('Required')
    }
    if (isNaN(value)){
      return new Error('needs to be a number')
    }

      if (value < 80 || value > 300){
        return new Error('Weight must be between 80 and 300')
      }

    // if (!(props[propName] instanceOf Number)){
    //   return new Error ("needs to be number")
    // }
    // if (props[propName]){
    //   let value = props[propName];
    //   if (value < 80 || value > 300) {
    //     return new Error ("Weight must be between 80 and 300.")
    //   }
    // } else {
    //   return new Error ("Required")
    // }
  }
}

export default Product
