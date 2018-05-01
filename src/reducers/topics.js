const initialState = {
  all: [],
  searchResults: [],
  popular: [],
  articles: {}
}

export function topics(state=initialState, action) {
  switch(action.type) {
    case 'FETCH_TOPICS_DONE':
      return {...state, all: action.payload}
    case 'CLEAR_TOPICS_SEARCH':
      return {...state, searchResults: []}
    case 'SEARCH_TOPICS_DONE':
      return {...state, searchResults: action.payload}
    case 'DELETE_USER_TOPIC_STARTED':
      return {...state, all: [...state.all.filter(topic => topic.id !== action.payload)]}
    case 'CREATE_USER_TOPIC_DONE':
      return {...state, all: [...state.all, action.payload.topic]}
    case 'POP_TOPICS_DONE':
      return {...state, popular: action.payload}
    case 'ARTICLE_TOPICS':
      const id = action.payload.articleId
      const tags = action.payload.tags
      return {...state, articles: {...state.articles, ...{[id]:tags}}}
    default:
      return state
  }
}
