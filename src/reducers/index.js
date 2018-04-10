import { combineReducers } from 'redux'
import { articles } from './articles'
import { authentication } from './authentication'
import { topics } from './topics'
import { sources } from './sources'
import { filter} from './filter'

const rootReducer = combineReducers({
  authentication,
  articles,
  topics,
  sources,
  filter
})

export default rootReducer
