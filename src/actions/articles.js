
export const fetchArticles = () => {

  return (dispatch) => {
    dispatch({
      type: 'BEGIN_LOAD'
    })
    fetch('http://localhost:3000/articles', {
      headers: {
        "Authorization": localStorage.getItem('token')
      }
    })
      .then(res => res.json())
      .then(json => {
        dispatch({
          type: 'LOAD_ARTICLES',
          payload: json ? json : []
        })
      })
  }
}

export const fetchMore = (currentCount) => {
  return (dispatch) => {
    fetch('http://localhost:3000/articles?start='+currentCount, {
      headers: {
        "Authorization": localStorage.getItem('token')
      }
    })
      .then(res => res.json())
      .then(json => {
        dispatch({
          type: 'ADD_ARTICLES',
          payload: json ? json : []
        })
      })
  }
}

export const getNewArticles = () => {

  return (dispatch) => {
    fetch('http://localhost:3000/new_articles', {
      headers: {
        "Authorization": localStorage.getItem('token')
      }
    })
      .then(res => res.json())
      .then(json => {
        dispatch({
          type: 'LOAD_ARTICLES',
          payload: json ? json : []
        })
      })
  }
}
