import React from 'react'
import PropTypes from 'prop-types'

export const ExpandIcon = ({ size, color, active, ...rest }) => (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
        height={ `${ size }px` } width={ `${ size }px` }
        viewBox="0 0 24 24"
        { ...rest }
        fill={ color } 
        style={{
            transition: 'transform 500ms', transformOrigin: 'center center',
            transform: active ? 'rotate(180deg)' : 'rotate(0deg)'
        }}
    >
        <path d="M 0,10 L 24,10 L 24,14 L 0,14" />
        <path d="M 10,0 L 10,24 L 14,24 L 14,0"
            style={{
                transition: 'transform 500ms 500ms', transformOrigin: 'center center',
                transform: active ? 'scale(0.0)' : 'scale(1.0)'
            }}
        />
  </svg>
)

ExpandIcon.propTypes = {
    color: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
}

ExpandIcon.defaultProps = {
    color: '#fff',
    size: 24,
}
