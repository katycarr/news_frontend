import React from 'react'

const TopicListItem = (props) => {
  return (
    <li className='topic'>
      {props.children}
      <span className='text'>{props.topic.name}</span>
    </li>
  )
}



export default TopicListItem
