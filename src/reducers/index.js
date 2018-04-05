import { combineReducers } from 'redux'
import { articles } from './articles'
import { authentication } from './authentication'
import { topics } from './topics'

const rootReducer = combineReducers({
  authentication,
  articles,
  topics
})

export default rootReducer
