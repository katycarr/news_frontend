import React from 'react'
import { connect } from 'react-redux'
import { getArticleTopics } from '../actions/topics'
import TopicListItem from '../components/TopicListItem'
import AddTopicButton from './AddTopicButton'

class ArticleTags extends React.Component {


  componentDidMount = () => {
    this.props.getArticleTopics(this.props.article.id)
  }


  render() {
    let tagEls;
    if(this.props.tags) {
      tagEls = this.props.tags.map(tag => {
        return <TopicListItem key={tag.id} topic={tag}>
            <AddTopicButton topic={tag} />
          </TopicListItem>
      })
    }

    return(
      <div className='article-tags'>
        <div className='article-topics'>
          {tagEls ? tagEls : null}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    tags: state.topics.articles[ownProps.article.id]
  }
}

export default connect(mapStateToProps, {getArticleTopics})(ArticleTags)
