
export const toggleCheck = (source, isChecked) => {
  let actionType = 'CHECK'
  if (isChecked) {
    actionType = 'UNCHECK'
  }
  return {
    type: actionType,
    payload: source
  }
}

export const fetchSourceInfo = (sourceName) => {
  return (dispatch) => {
    dispatch({
      type: 'FETCH_SOURCE_INFO_STARTED'
    })
    fetch('https://mbfc-api.herokuapp.com/sources?q='+sourceName)
      .then(res => res.json())
      .then(json => {
        dispatch({
          type: 'FETCH_SOURCE_INFO_DONE',
          payload: {[sourceName]: json}
        })
      })
  }
}
