import React from 'react'
import { connect } from 'react-redux'
import { getNewArticles } from '../../actions/articles'

class GetNew extends React.Component {

  handleClick = () => {
    this.props.getNewArticles()
  }

  render() {
    return(
      <button onClick={this.handleClick}>Get New</button>
    )
  }
}

export default connect(null, { getNewArticles })(GetNew)
