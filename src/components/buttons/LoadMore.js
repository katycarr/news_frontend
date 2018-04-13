import React from 'react'
import { connect } from 'react-redux'
import { fetchMore } from '../../actions/articles'

class LoadMore extends React.Component {

  handleClick = () => {
    this.props.fetchMore(this.props.articleCount)
  }

  render() {
    console.log(this.props)
    return(
      <button onClick={this.handleClick}>Load More</button>
    )
  }
}

function mapStateToProps(state) {
  return {
    articleCount: state.articles.all.length
  }
}

export default connect(mapStateToProps, { fetchMore })(LoadMore)
