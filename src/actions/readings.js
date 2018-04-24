export const createReading = (articleId) => {
  const token = localStorage.getItem('token')
  let options = {
    method: 'POST',
    headers: {
      'Content-Type':'application/json',
      Accept:'application/json',
      "Authorization": token
    },
    body: JSON.stringify({articleId: articleId})
  }
  return (dispatch) => {
    fetch('https://api-frontpage.herokuapp.com/readings', options)
      .then(res => res.json())
      .then(json => {
        dispatch({
          type: 'CREATE_READING',
          payload: json
        })
      })
  }
}

export const getReadings = () => {
  return (dispatch) => {
    dispatch({
      type: 'BEGIN_READINGS_LOAD'
    })
    fetch('https://api-frontpage.herokuapp.com/readings', {
      headers: {
        "Authorization": localStorage.getItem('token')
      }
    })
      .then(res => res.json())
      .then(json => {
        dispatch({
          type: 'LOAD_READINGS',
          payload: json ? json : []
        })
      })
  }

}

export const archiveReading = (articleId) => {
  let options = {
    method: 'PATCH',
    headers: {
      'Content-Type':'application/json',
      Accept:'application/json',
      "Authorization": localStorage.getItem('token')
    }
  }
  return (dispatch) => {
    fetch('https://api-frontpage.herokuapp.com/readings/'+articleId, options)
      .then(res => res.json())
      .then(json => {
        dispatch({
          type: 'ARCHIVE_READING',
          payload: json
        })
      })
  }
}
