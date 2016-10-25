import React from 'react'
// import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PageComponent from '../components/Page'
import {toggleMainClass} from '../actions/page'

const mapStateToProps = state => ({
    className: state.page.className
})

const mapDispatchToProps = (dispatch) => {
  return {
    onToggleClick: () => { dispatch(toggleMainClass()); }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageComponent)
