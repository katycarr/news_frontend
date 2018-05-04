import React from 'react'
import Popover from 'react-popover'
import PopContent from './PopContent'
import SourceLabel from './Label'
import { connect } from 'react-redux'
import { fetchSourceInfo } from '../../actions/sources'
import './SourceLabel.css'

class LabelWithPop extends React.Component {
  state = {
    isOpen: false
  }

  componentDidMount = () => {
    this.props.fetchSourceInfo(this.props.source)
  }

  togglePop = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  biasClass = () => {
    if (this.props.mbfcInfo.bias.name){
      return this.props.mbfcInfo.bias.name.replace(/[^A-Z0-9]/ig, "").toLowerCase()
    } else {
      return ''
    }
  }

  render() {
    if(this.props.loaded) {
      return(
        <Popover preferPlace='right' onOuterAction={this.togglePop} isOpen={this.state.isOpen} body={<PopContent content={this.props.mbfcInfo}/>}>
          <SourceLabel className={'srcLabel '+this.biasClass()} source={this.props.source} handleClick={this.togglePop} />
        </Popover>
      )
    } else {
      return (
        <SourceLabel source={this.props.source} handleClick={this.togglePop} />
      )
    }

  }
}

function mapStateToProps(state, ownProps) {
  return {
    loaded: !!state.sources.info[ownProps.source],
    mbfcInfo:state.sources.info[ownProps.source]
  }
}

export default connect(mapStateToProps, {fetchSourceInfo})(LabelWithPop)
