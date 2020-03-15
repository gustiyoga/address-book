import React, { Component } from 'react'

class EmptyState extends Component {
  render() {
    return(
      <div className="empty-state">
        <img src={ this.props.image } width="200" alt={ this.props.text } />
        <p>
          <strong>
            { this.props.text }
          </strong>
        </p>
      </div>
    )
  }
}

export default EmptyState
