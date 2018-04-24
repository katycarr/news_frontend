import React from 'react'
import { connect } from 'react-redux'
import { fetchMore } from '../../actions/articles'
import '../../stylesheets/Buttons.css'

class LoadMore extends React.Component {

  handleClick = () => {
    this.props.fetchMore(this.props.articleCount)
  }

  render() {
    return(
      <button className='load-more' onClick={this.handleClick}>Load More</button>
    )
  }
}

function mapStateToProps(state) {
  return {
    articleCount: state.articles.all.length
  }
}

export default connect(mapStateToProps, { fetchMore })(LoadMore)
