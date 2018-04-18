import React from 'react'
import TimeAgo from 'react-timeago'
import shortString from 'react-timeago/lib/language-strings/en-short'
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'
import '../../stylesheets/ArticleMeta.css'
const formatter = buildFormatter(shortString)

const ArticleMeta = (props) => {

  const toneStyle = () => {
    switch (props.tone) {
      case 'positive':
        return 'tone green'
      case 'negative':
        return 'tone red'
      case 'neutral':
        return 'tone grey'
      default:
        return 'tone hidden'
    }
  }

  const readString = () => {
    let splitString = props.readingtime.split(' ')
    return splitString[0]+splitString[1][0]
  }

  return (
    <div className='meta'>
      {props.children}
      <div className='timestamp'>{readString()+String.fromCharCode(8987)}</div>
      <div className='timestamp'><TimeAgo date={props.date} formatter={formatter}/>{String.fromCharCode(9998)}</div>
      <div data-tip={props.tone+' tone'} className={toneStyle()}>{String.fromCharCode(9673)}</div>
    </div>
  )
}

export default ArticleMeta
