export const baseUrl = 'http://localhost:3000'

function actionCreator(type, url, options, payload=null) {
  return () => (dispatch) => {
    dispatch({
      type: `${type}_STARTED`,
      payload
    })
    fetch(baseUrl+url, options)
      .then(res => res.json())
      .then(json => {
        dispatch({
          type: `${type}_DONE`,
          payload: json ? json : []
        })
      })
  }
}

export default actionCreator
