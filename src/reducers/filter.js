const initialState = {
  length:'both'
}

export function filter(state=initialState, action) {
  switch(action.type) {
    case 'UPDATE_LENGTH':
      return {length: action.payload}
    default:
      return state
  }
}
