import React from 'react'
import PropTypes from "prop-types"

function handleVariant(variant) {
    let variantClassName
    switch(variant) {
    case 'primary': variantClassName = 'btn-primary'
        break;
    case 'success': variantClassName = 'btn-success'
        break;
    case 'danger': variantClassName = 'btn-danger'
        break;
    default: variantClassName = 'btn-theme'
    }

    return variantClassName
}

function handleSize(size) {
    let sizeClassName
    switch(size) {
    case 'wide': sizeClassName = 'btn-wide'
        break;
    case 'block': sizeClassName = 'btn-block'
        break;
    default: sizeClassName = ''
    }

    return sizeClassName
}

function Button ({ variant, size, label, handleClick }) {
    return (
        <button onClick={handleClick} className={`btn ${handleVariant(variant)} ${handleSize(size)} text-capitalize`}>{label}</button>
    )
}

Button.propTypes = {
    label: PropTypes.string.isRequired,
    variant: PropTypes.string,
    size: PropTypes.string,
    handleClick: PropTypes.func
}

export default Button