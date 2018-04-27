import actionCreator from './actionCreator'

const authHeader = { headers: {
  "Authorization": localStorage.getItem('token')
}}

export const fetchArticles = actionCreator('FETCH_ARTICLES', '/articles', authHeader)

export function fetchMore(currentCount)  {
   return (actionCreator('ADD_ARTICLES', '/articles?start='+currentCount, authHeader))()
}

export const getNewArticles = actionCreator('FETCH_ARTICLES','/new_articles', authHeader)
