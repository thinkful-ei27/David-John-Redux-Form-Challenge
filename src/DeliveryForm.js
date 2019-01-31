import React, { Component } from 'react';
import Input from './components/Input';
import Select from './components/Select';
import TextArea from './components/TextArea';
import Button from './components/Button';
import {reduxForm, SubmissionError} from 'redux-form';
import Fields from './components/Fields';
import {required, isFiveCharsLong, isANumber} from './validators';

const options = [
    'My delivery has not arrived',
    'The wrong item was delivered',
    'Part of my order was missing',
    'Some of my order arrived damaged',
    'Other (give details below)'
]

export class DeliveryForm extends Component {
    onSubmit(values) {
        const url = 'https://us-central1-delivery-form-api.cloudfunctions.net/api/report'
        console.log(values);
        return fetch(url, {
            method: 'POST',
            body: JSON.stringify(values),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => {
            if (!res.ok) {
                return Promise.reject({
                    code: res.status,
                    message: res.statusText
                });
            }
            return;
        })
        .then(() => console.log('Submitted with values', values))
        .catch(err => {
            const {reason, message, location} = err;
            if (reason === 'ValidationError') {
                return Promise.reject(
                    new SubmissionError({
                        [location]: message
                    })
                );
            }
            return Promise.reject(
                new SubmissionError({
                    _error: 'Error submitting message'
                })
            )
        })
    }
  render() {
      const optionMap = options.map(option => <option value={option}>{option}</option>);
    return (
      <div>
        <h2>Report a problem with your delivery</h2>
        <form onSubmit={this.props.handleSubmit(values=> this.onSubmit(values))}> 
            <Fields 
              name='trackingNumber'
              id='trackingNumber'
              title='Tracking Number'
              type='text'
              component={Input}
              validate={[required, isFiveCharsLong, isANumber]}
            />
            <Fields 
                name='issue'
                title='What is your issue?'
                type='text'
                component='select'
            >
                <option></option>
                {optionMap}
            </Fields>
            {/* <TextArea 
                name='details'
                title='Give more details (optional)'
            /> */}
            <Fields 
                name='details'
                title='Give more details (optional)'
                type='text'
                component='textarea'
            />
            <Button 
                title='Submit'
            />
        </form>
      </div>
    )
  }
}

export default reduxForm({
    form: 'delivery',
    required,
    isFiveCharsLong
})(DeliveryForm);