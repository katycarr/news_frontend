import actionCreator from './actionCreator'
import { baseUrl } from './actionCreator'
const authHeader = { headers: {
  "Authorization": localStorage.getItem('token')
}}

export const fetchTopics = actionCreator('FETCH_TOPICS','/topics', authHeader)

export const searchTopics = input => {
  return (actionCreator('SEARCH_TOPICS', '/topics/search?q='+input, authHeader))()
}

export const clearTopicsSearch = () => {
  return {
    type: 'CLEAR_TOPICS_SEARCH'
  }
}

export const createTopic = (topic) => {
  let options = {
    method: 'POST',
    headers: {
      'Content-Type':'application/json',
      Accept:'application/json',
      "Authorization": localStorage.getItem('token')
    },
    body: JSON.stringify({'topic': {
      label: topic.name,
      uri: topic.url
    }})
  }
  return (actionCreator('CREATE_USER_TOPIC', '/topics', options))()
}

export const deleteUserTopic = (topicId) => {
  let options = {
    method: 'DELETE',
    headers: {
      'Content-Type':'application/json',
      Accept:'application/json',
      "Authorization": localStorage.getItem('token')
    }
  }
  return(actionCreator('DELETE_USER_TOPIC','/topics/'+topicId, options, topicId))()
}

export const getPopularTopics = actionCreator('POP_TOPICS', '/topics?pop=true', authHeader)

export const getArticleTopics = (article_id) => {
  return (dispatch) => {
    fetch(baseUrl+'/topics?article_id='+article_id,authHeader)
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
