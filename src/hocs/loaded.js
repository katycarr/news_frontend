import React from 'react'

function loaded(WrappedComponent) {
  class loadComponent extends React.Component {
    state = {
      done: this.props.fetchDone
    }


  }
  function mapStateToProps(state) {
    return {
      fetchDone: this.state.articles.all.length > 0
    }
  }

}

export default loaded
