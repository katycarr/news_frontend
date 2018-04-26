import React from 'react'
import { connect } from 'react-redux'
import { getNewArticles } from '../../actions/articles'

class GetNew extends React.Component {

  handleClick = () => {
    this.props.getNewArticles()
  }

  render() {
    return(
      <div className='getnew-container'>
        <button className='get-new' onClick={this.handleClick}>Get New</button>
        <p> (may take a moment) </p>
      </div>
    )
  }
}

export default connect(null, { getNewArticles })(GetNew)
