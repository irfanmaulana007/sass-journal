import React from 'react';
import PropTypes from "prop-types"

function Message ({ message }) {
    return <h6 className="text-white text-center">{message}</h6>
}

Message.propTypes = {
    message: PropTypes.string.isRequired
}

Message.defaultProps = {
    message: 'Loading . . .'
}

export default Message;