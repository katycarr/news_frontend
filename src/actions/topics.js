
export const fetchTopics = () => {

  return (dispatch) => {
    fetch('https://api-frontpage.herokuapp.com/topics', {headers: {
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
  return (dispatch) => {
    fetch('https://api-frontpage.herokuapp.com/topics/search?q='+input)
      .then(res => res.json())
      .then(json => {
        dispatch({
          type: 'SEARCH_TOPICS',
          payload: json
        })
      })
  }
}

export const clearTopicsSearch = () => {
  return (dispatch) => {
    dispatch({
      type: 'CLEAR_TOPICS_SEARCH'
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
    fetch('https://api-frontpage.herokuapp.com/topics', options)
      .then(res => res.json())
      .then(json => {
        dispatch({
          type: 'CREATE_USER_TOPIC',
          payload: json.topic
        })
        dispatch({
          type: 'LOAD_ARTICLES',
          payload: json.articles
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
    dispatch({
      type: 'DELETE_USER_TOPIC',
      payload: topicId
    })

    fetch('https://api-frontpage.herokuapp.com/topics/'+topicId, options)
      .then(res => res.json())
      .then(json => {
        dispatch({
          type:'LOAD_ARTICLES',
          payload: json
        })
      })
  }
}

export const getPopularTopics = () => {
  return (dispatch) => {
    fetch('https://api-frontpage.herokuapp.com/topics?pop=true')
      .then(res => res.json())
      .then(json => {
        dispatch({
          type: 'POP_TOPICS',
          payload: json
        })
      })
  }
}

export const getArticleTopics = (article_id) => {
  return (dispatch) => {
    fetch('https://api-frontpage.herokuapp.com/topics?article_id='+article_id,
        {headers: {
          "Authorization": localStorage.getItem('token')
        }})
      .then(res => res.json())
      .then(json => {
        dispatch({
          type: 'ARTICLE_TOPICS',
          payload: {
            articleId: article_id,
            tags: json
          }
        })
      })
  }
}
