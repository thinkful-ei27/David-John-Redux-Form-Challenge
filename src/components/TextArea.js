import React from 'react'
import PropTypes from 'prop-types'

function TextArea(props) {
  return (
    <div className="form-group">
        <label htmlFor={props.name} className="form-label">
            {props.title}
        </label> <br />
        <textarea
            className="form-control"
            id={props.name}
            name={props.name}
            value={props.value}
            onChange={props.handleChange}
            placeholder={props.placeholder}
            {...props}
        />
    </div>
  )
}

// TextArea.propTypes = {

// }

export default TextArea

