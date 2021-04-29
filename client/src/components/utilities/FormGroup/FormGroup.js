import React from 'react'
import PropTypes from "prop-types"

const FormGroup = ({ type, label, name, handleChange, value }) => {
    const inputProps = {
        name: name,
        value: value,
        onChange: handleChange,
        autocomplete: 'off'
    }
    let inputType
    
    switch(type) {
    case 'text': inputType = <input className="form-control" {...inputProps} />
        break;
    case 'textarea': inputType = <textarea rows="5" className="form-control" {...inputProps}></textarea>
        break;
    default: inputType = <input className="form-control" type="text" {...inputProps} />
        break;
    }

    return (
        <div className="form-group">
            <label className="small text-uppercase text-muted">{label ? label: name}</label>
            {inputType}
        </div>
    )
}

FormGroup.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    handleChange: PropTypes.func
}

export default FormGroup