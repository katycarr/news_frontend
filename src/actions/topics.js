
export const fetchTopics = () => {

  return (dispatch) => {
    fetch('http://localhost:3000/topics', {headers: {
      "Authorization": localStorage.getItem('token')
    }})
      .then(res => res.json())
      .then(json => {
        dispatch({
          type: 'LOAD_TOPICS',
          payload: json
        })
      })
  }
}

export const searchTopics = input => {
  let options = {
    method: 'GET',
    headers: {
      Accept:'application/json'
    },
  }
  return (dispatch) => {
    fetch('http://lookup.dbpedia.org/api/search/PrefixSearch?QueryString='+input, options)
      .then(res => res.json())
      .then(json => {
        dispatch({
          type: 'SEARCH_TOPICS',
          payload: json.results
        })
      })
  }
}

export const createTopic = (topic) => {
  const token = localStorage.getItem('token')
  let options = {
    method: 'POST',
    headers: {
      'Content-Type':'application/json',
      Accept:'application/json',
      "Authorization": token
    },
    body: JSON.stringify({'topic': {
      label: topic.name,
      uri: topic.url
    }})
  }
  return (dispatch) => {
    fetch('http://localhost:3000/topics', options)
      .then(res => res.json())
      .then(json => {
        dispatch({
          type: 'CREATE_USER_TOPIC',
          payload: json
        })
      })
  }
}

export const deleteUserTopic = (topicId) => {
  const token = localStorage.getItem('token')
  let options = {
    method: 'DELETE',
    headers: {
      'Content-Type':'application/json',
      Accept:'application/json',
      "Authorization": token
    }
  }
  return (dispatch) => {
    fetch('http://localhost:3000/topics/'+topicId, options)
      .then(res => res.json())
      .then(() => {
        dispatch({
          type: 'DELETE_USER_TOPIC',
          payload: topicId
        })
      })
  }
}

export const getPopularTopics = () => {
  return (dispatch) => {
    fetch('http://localhost:3000/topics?pop=true')
      .then(res => res.json())
      .then(json => {
        dispatch({
          type: 'POP_TOPICS',
          payload: json
        })
      })
  }
}
