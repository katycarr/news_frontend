const initialState = {
  current:[],
  archive:[],
  loaded: true
}

export function readings(state=initialState, action) {
  switch(action.type) {
    case 'CREATE_READING':
      let newReadings = [...state.current, action.payload]
      return {...state, current: [...state.current, action.payload]}
    case 'BEGIN_READINGS_LOAD':
      return {...state, loaded:false}
    case 'LOAD_READINGS':
      return {current: action.payload.reading_list, archive: action.payload.archive, loaded:true}
    case 'ARCHIVE_READING':
      const newCurrent = state.current.filter(reading => reading.id !== action.payload.id)
      return {...state, current: newCurrent, archive: [...state.archive, action.payload]}
    default:
      return state
  }
}
