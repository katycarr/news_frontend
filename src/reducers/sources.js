const initialState = {
  all: [],
  checked: [],
  info: {}
}

function getUniqueSources(articles, state) {
  let uniqueSources = []
  const srcList = articles.map(article => article.source)
  srcList.forEach(source => {
    if(!uniqueSources.includes(source) && !state.all.includes(source)) {
      uniqueSources.push(source)
    }
  })
  return uniqueSources
}

export function sources(state=initialState, action) {
  switch(action.type) {
    case 'FETCH_ARTICLES_DONE':
      const articleSources = getUniqueSources(action.payload, {all:[]})
      return {...state, all: articleSources, checked: articleSources}
    case 'UNCHECK':
      let newChecked = state.checked.filter(src => src !== action.payload)
      return {...state, checked: newChecked}
    case 'CHECK':
      return {...state, checked: [...state.checked, action.payload]}
    case 'NEW_ARTICLES':
    case 'ADD_ARTICLES_DONE':
      const sourceList = getUniqueSources(action.payload, state)
      return {...state, all: [...state.all, ...sourceList], checked: [...state.checked, ...sourceList]}
    case 'FETCH_SOURCE_INFO_DONE':
      return {
        ...state,
        info: {...state.info, ...action.payload}
      }
    default:
      return state
  }
}
