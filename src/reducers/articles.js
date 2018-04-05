const initialState = {
  all: []
}

export function articles(state=initialState, action) {
  switch(action.type) {
    case 'LOAD_ARTICLES':
      return {all: action.payload}
    default:
      return state
  }
}
