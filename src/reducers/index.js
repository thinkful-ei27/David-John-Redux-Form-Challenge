const initialState = {
    options: [
        'My delivery has not arrived',
        'The wrong item was delivered',
        'Part of my order was missing',
        'Some of my order arrived damaged',
        'Other (give details below)'
    ]
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case typeName:
    return { ...state, ...payload }

  default:
    return state
  }
}