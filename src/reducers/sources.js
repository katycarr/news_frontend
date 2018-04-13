const initialState = {
  all: [],
  checked: []
}

export function sources(state=initialState, action) {
  switch(action.type) {
    case 'LOAD_ARTICLES':
      let uniqueSources = []
      const srcList = action.payload.map(article => article.source)
      srcList.forEach(source => {
        if(!uniqueSources.includes(source)) {
          uniqueSources.push(source)
        }
      })
      return {all: uniqueSources, checked: uniqueSources}
    case 'UNCHECK':
      let newChecked = state.checked.filter(src => src !== action.payload)
      return {...state, checked: newChecked}
    case 'CHECK':
      return {...state, checked: [...state.checked, action.payload]}
    case 'ADD_ARTICLES':
      let unique = []
      const sourceList = action.payload.map(article => article.source)
      sourceList.forEach(source => {
        if(!unique.includes(source) && !state.all.includes(source)) {
          unique.push(source)
        }
      })
      return {all: [...state.all, ...unique], checked: [...state.checked, ...unique]}
    default:
      return state
  }
}
