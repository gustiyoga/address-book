import React, { Component } from "react"
import ReactDOM from "react-dom"
import style from './scss/main.scss'
import Form from './js/components/Form'

const wrapper = document.getElementById('app')
wrapper && ReactDOM.render(<Form />, wrapper)

if (module.hot) {
  module.hot.accept()
}