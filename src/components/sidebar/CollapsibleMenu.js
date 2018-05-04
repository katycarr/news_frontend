import React from 'react'
import './CollapsibleMenu.css'

class CollapsibleMenu extends React.Component {
  state = {
    visible: false
  }

  handleClick = () => {
    this.setState({
      visible: !this.state.visible
    })
  }

  render() {
    let menuClass = 'menu-content'
    if (this.state.visible) {
      menuClass+=' show'
    }
    return(
      <div>
        <h1 className='sb-title' onClick={this.handleClick}>
          {this.props.title}
          <span className='arrow'>
            {this.state.visible ? String.fromCharCode(9660) : String.fromCharCode(9654)}
          </span>
        </h1>
        <div className={menuClass}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default CollapsibleMenu
