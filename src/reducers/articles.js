const initialState = {
  all: [],
  loaded: true
}

export function articles(state=initialState, action) {
  switch(action.type) {
    case 'FETCH_ARTICLES_STARTED':
      return {...state, loaded: false}
    case 'CREATE_USER_TOPIC_DONE':
      return {all: action.payload.articles, loaded: true}
    case 'FETCH_ARTICLES_DONE':
    case 'DELETE_USER_TOPIC_DONE':
      return {all: action.payload, loaded: true}
    case 'ADD_ARTICLES_DONE':
      return {...state, all:[...state.all, ...action.payload]}
    case 'NEW_ARTICLES':
      return {...state, all:[...action.payload, ...state.all]}
    default:
      return state
  }
}
