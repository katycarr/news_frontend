import React from 'react'
import AddToReading from '../buttons/AddToReading'
import ArticleTags from './ArticleTags'
import DisplayArticle from './DisplayArticle'
import ArchiveReading from '../buttons/ArchiveReading'
import {connect} from 'react-redux'

class ArticleCard extends React.Component {

  whichButton = () => {
    if (!this.props.reading && !this.props.archive) {
      return <AddToReading article={this.props.article} />
    } else if (this.props.archive) {
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
      reading: state.readings.current.find(article => article.id === ownProps.article.id),
      archive: state.readings.archive.find(article => article.id === ownProps.article.id)
    }

}

export default connect(mapStateToProps)(ArticleCard)
