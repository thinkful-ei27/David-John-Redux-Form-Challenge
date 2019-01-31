import React from 'react'
import {Field} from 'redux-form';

function Fields(props) {
    return (
        <div className="form-group">
            <label htmlFor={props.name} className="form-label">
                {props.title}
            </label><br />
            <Field
                name={props.name}
                id={props.name}
                type={props.type}
                component={props.component}
                {...props}
            />
        </div>
    )
}

// Input.propTypes = {

// }

export default Fields

