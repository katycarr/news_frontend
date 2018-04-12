import React from 'react'
import AddToReading from '../buttons/AddToReading'
import ArticleTags from './ArticleTags'
import DisplayArticle from './DisplayArticle'
import ArchiveReading from '../buttons/ArchiveReading'
import {connect} from 'react-redux'

class ArticleCard extends React.Component {

  whichButton = () => {
    if (!this.props.reading) {
      return <AddToReading article={this.props.article} />
    } else if (this.props.reading['read?']) {
      return <div>read</div>
    } else {
      return <ArchiveReading reading={this.props.reading} />
    }
  }

  render() {
    const readingButton = this.whichButton()
    return(
      <div>
        <DisplayArticle article={this.props.article}/>
        {readingButton}
        <ArticleTags article={this.props.article} />
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {

    return {
      reading: state.readings.all[ownProps.article.id]
    }

}

export default connect(mapStateToProps)(ArticleCard)
