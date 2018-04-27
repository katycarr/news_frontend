const initialState = {
  current:[],
  archive:[],
  loaded: true
}

export function readings(state=initialState, action) {
  switch(action.type) {
    case 'CREATE_READING_DONE':
      return {...state, current: [...state.current, action.payload]}
    case 'FETCH_READINGS_START':
      return {...state, loaded:false}
    case 'FETCH_READINGS_DONE':
      return {current: action.payload.reading_list, archive: action.payload.archive, loaded:true}
    case 'ARCHIVE_READING_DONE':
      const newCurrent = state.current.filter(reading => reading.id !== action.payload.id)
      return {...state, current: newCurrent, archive: [...state.archive, action.payload]}
    default:
      return state
  }
}
