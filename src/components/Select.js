import React from 'react'
import PropTypes from 'prop-types'

function Select(props) {
    return (
        <div className="form-group">
            <select
                id={props.name}
                name={props.name}
                value={props.value}
                onChange={props.handleChange}
                className="form-control"
            >
                <option value="" disabled>
                    {props.placeholder}
                </option>
                {props.options.map(option => {
                    return (
                        <option key={option} value={option} label={option}>
                            {option}
                        </option>
                    );
                })}
            </select>
        </div>
    )
}

// Select.propTypes = {

// }

export default Select

