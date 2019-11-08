import React, { Component } from 'react'
import PropTypes from 'prop-types'

class VisibleCounter extends Component {
    render() {
      const { value, onIncrement, onDecrement } = this.props
      return (
        <p>
          Clicked: {value} times
          {' '}
          <button onClick={onIncrement}>
            +
          </button>
          {' '}
          <button onClick={onDecrement}>
            -
          </button>
          {' '}
        </p>
      )
    }
  }
  
  VisibleCounter.propTypes = {
    value: PropTypes.number.isRequired
  }

  export default VisibleCounter;