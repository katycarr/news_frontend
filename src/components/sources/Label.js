import React from 'react'



const SourceLabel = props => {
  return(
    <div onClick={props.handleClick} className={props.className}>
      {props.source}
    </div>

  )
}

export default SourceLabel
