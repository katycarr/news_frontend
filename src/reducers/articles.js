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
    case 'ADD_ARTICLES':
      return {...state, all:[...state.all, ...action.payload]}
    case 'NEW_ARTICLES':
      return {...state, all:[...action.payload, ...state.all]}
    default:
      return state
  }
}
