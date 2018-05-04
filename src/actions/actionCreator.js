export const baseUrl = 'https://api-frontpage.herokuapp.com'

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
