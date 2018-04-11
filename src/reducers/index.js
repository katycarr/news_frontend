import { combineReducers } from 'redux'
import { articles } from './articles'
import { authentication } from './authentication'
import { topics } from './topics'
import { sources } from './sources'
import { filter} from './filter'
import { readings } from './readings'

const rootReducer = combineReducers({
  authentication,
  articles,
  topics,
  sources,
  filter,
  readings
})

export default rootReducer
