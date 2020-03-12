import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './js/store/index'
import App from './js/components/App'
import './scss/main.scss'

const wrapper = document.getElementById('app')
wrapper && render(
  <Provider store={ store }>
    <App />
  </Provider>,
  wrapper
)

if(module.hot) {
  module.hot.accept()
}
