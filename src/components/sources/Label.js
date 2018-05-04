import React from 'react'



class SourceLabel extends React.Component {




  render() {
    return(
      <div onClick={this.props.handleClick} className={this.props.className}>
        {this.props.source}
      </div>

    )
  }
}



export default SourceLabel
