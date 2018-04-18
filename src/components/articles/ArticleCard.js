import React from 'react'
import AddToReading from '../buttons/AddToReading'
import ArticleTags from './ArticleTags'
import DisplayArticle from './DisplayArticle'
import ArchiveReading from '../buttons/ArchiveReading'
import {connect} from 'react-redux'
import '../../stylesheets/ReadingButton.css'
import ReactTooltip from 'react-tooltip'

class ArticleCard extends React.Component {

  whichButton = () => {
    if (!this.props.reading && !this.props.archive) {
      return <AddToReading article={this.props.article} />
    } else if (this.props.archive) {
      return <button className='read'>x</button>
    } else {
      return <ArchiveReading reading={this.props.reading} />
    }
  }

  render() {
    const readingButton = this.whichButton()
    return(
      <div className='article'>
        <ReactTooltip type='info'/>
        <DisplayArticle article={this.props.article}>
          <div className='reading-button'>{readingButton}</div>
        </DisplayArticle>
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
