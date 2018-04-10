import { combineReducers } from 'redux'
import { articles } from './articles'
import { authentication } from './authentication'
import { topics } from './topics'
import { sources } from './sources'

const rootReducer = combineReducers({
  authentication,
  articles,
  topics,
  sources
})

export default rootReducer
