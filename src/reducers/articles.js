const initialState = {
  all: [],
  loaded: true
}

export function articles(state=initialState, action) {
  switch(action.type) {
    case 'BEGIN_LOAD':
      return {...state, loaded: false}
    case 'LOAD_ARTICLES':
      return {all: action.payload, loaded: true}
    default:
      return state
  }
}
