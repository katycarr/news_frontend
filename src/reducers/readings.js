const initialState = {
  all:[],
  loaded: true
}

export function readings(state=initialState, action) {
  switch(action.type) {
    case 'CREATE_READING':
      return {...state, all: [...state.readings, action.payload]}
    case 'BEGIN_READINGS_LOAD':
      return {...state, loaded:false}
    case 'LOAD_READINGS':
      return {all: action.payload, loaded:true}
    default:
      return state
  }
}
