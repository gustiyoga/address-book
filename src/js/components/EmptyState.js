import React, { Component } from 'react'

/**
 * Component for empty state with Image and Text.
 * 
 * @component
 * @example
 * <EmptyState image="image.svg" text="empty state text" />
 */
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
