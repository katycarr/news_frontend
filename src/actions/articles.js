
export const fetchArticles = (user_id) => {

  return (dispatch) => {
    fetch('http://localhost:3000/articles?user_id='+user_id)
      .then(res => res.json())
      .then(json => {
        dispatch({
          type: 'LOAD_ARTICLES',
          payload: json
        })
      })
  }

}
