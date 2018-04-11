import React from 'react'

const TopicListItem = (props) => {
  return (
    <li className='topic'>
      {props.topic.name}
      {props.children}
    </li>
  )
}



export default TopicListItem
