import React from 'react'
import { connect } from 'react-redux'
import PageComponent from '../components/Page'
import {toggleMainClass} from '../actions/page'

const mapStateToProps = state => ({ ...state.page })

const mapDispatchToProps = (dispatch) => ({
  onToggleClick: () => { dispatch(toggleMainClass()); }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageComponent)
