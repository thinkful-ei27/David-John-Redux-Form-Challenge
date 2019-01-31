import React, { Component } from 'react'

export class Input extends Component {
    
  render() {
      const { input: { value, onChange }} = this.props;
      let error;
      if (this.props.meta.touched && this.props.meta.error) {
          error = <div className="form-error">{this.props.meta.error}</div>;
      }

      let warning;
      if (this.props.meta.touched && this.props.meta.warning) {
          warning = (
              <div className="form-warning">{this.props.meta.warning}</div>
          );
      }
    return (
        <div className="form-group">
            <div>
                {error}
                {warning}
            </div>
            <input 
                className="form-control"
                id={this.props.name}
                name={this.props.name}
                type={this.props.inputType}
                value={this.props.input.value}
                onChange={this.props.input.onChange}
                placeholder={this.props.placeholder}
                {...this.props}
            />
        </div>
    )
  }
}

export default Input