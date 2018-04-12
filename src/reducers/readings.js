const initialState = {
  all:{},
  loaded: true
}

export function readings(state=initialState, action) {
  switch(action.type) {
    case 'CREATE_READING':
      return {...state, all: {...state.all, ...action.payload}}
    case 'BEGIN_READINGS_LOAD':
      return {...state, loaded:false}
    case 'LOAD_READINGS':
      return {all: action.payload, loaded:true}
    case 'ARCHIVE_READING':
      const update = state.all[action.payload.id]
      return {...state, all: {...state.all, ...action.payload}}
    default:
      return state
  }
}
