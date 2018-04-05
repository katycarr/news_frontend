const initialState = {
  user: {},
  isLoggedIn:false
}

export function authentication(state=initialState, action) {
  switch(action.type) {
    case 'CREATE_USER':
      return { user: action.payload, isLoggedIn: true}
    default:
      return state
  }
}
