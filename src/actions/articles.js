
export const fetchArticles = () => {

  return (dispatch) => {
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
