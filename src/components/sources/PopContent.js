import React from 'react'
import './Popover.css'

class PopContent extends React.Component {


  render() {
    const srcInfo = this.props.content
    return (
      <div className='popover'>
        <h1>{srcInfo.bias.name}</h1>
        <p>{srcInfo.bias.description}</p>
        <h1>Factual Rating: {srcInfo.factual_rating.name}</h1>
        <p>{srcInfo.factual_rating.description}</p>
        <a target='_blank' href='https://mediabiasfactcheck.com/'>Media Bias Fact Check</a>
      </div>
    )
  }
}

export default PopContent
