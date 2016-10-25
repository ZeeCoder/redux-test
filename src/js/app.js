import { createStore } from 'redux'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import Page from './containers/Page'
import rootReducer from './reducers'

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

require('../css/app.css')

render(
  <Provider store={store}>
    <Page />
  </Provider>,
  document.getElementById('root')
)
