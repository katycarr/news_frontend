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
    default:
      return state
  }
}
