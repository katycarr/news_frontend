const initialState = {
  all: []
}

export function topics(state=initialState, action) {
  switch(action.type) {
    case 'LOAD_TOPICS':
      return {all: action.payload}
    default:
      return state
  }
}
