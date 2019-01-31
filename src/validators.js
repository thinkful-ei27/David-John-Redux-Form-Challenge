const required = value => value ? undefined : 'Required';

const isFiveCharsLong = value => value.length === 5 ? undefined : 'Must be 5 chars long';

const isANumber = value => Number(value) ? undefined : 'Must be a number';

export {
    required,
    isFiveCharsLong,
    isANumber
}