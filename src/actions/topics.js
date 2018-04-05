
export const fetchTopics = (user_id) => {

  return (dispatch) => {
    fetch('http://localhost:3000/topics?user_id='+user_id)
      .then(res => res.json())
      .then(json => {
        dispatch({
          type: 'LOAD_TOPICS',
          payload: json
        })
      })
  }

}
