const initialState = {
  all: [],
  searchResults: [],
  popular: []
}

export function topics(state=initialState, action) {
  switch(action.type) {
    case 'LOAD_TOPICS':
      return {...state, all: action.payload}
    case 'SEARCH_TOPICS':
      return {...state, searchResults: action.payload}
    case 'DELETE_USER_TOPIC':
      return {...state, all: [...state.all.filter(topic => topic.id !== action.payload)]}
    case 'CREATE_USER_TOPIC':
      return {...state, all: [...state.all, action.payload]}
    case 'POP_TOPICS':
      return {...state, popular: action.payload}
    default:
      return state
  }
}
