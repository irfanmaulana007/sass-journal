import React from 'react';
import PropTypes from "prop-types"

const Title = ({ title, subTitle }) => {
    return (
        <div className="mb-5">
            <h3 className="text-center text-uppercase">{title}</h3>
            <h6 className="text-center txt-dark">{subTitle}</h6>
        </div>
    )
}

Title.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string
}

export default Title