const initialState = {
  user: null
}

export function authentication(state=initialState, action) {
  switch(action.type) {
    case 'CREATE_USER':
      return { user: action.payload}
    case 'LOGOUT':
      return { user: null }
    case 'GET_USER':
      return {user: action.payload}
    default:
      return state
  }
}
