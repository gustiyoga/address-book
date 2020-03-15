import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  setAdvanceSearch,
  toggleAdvanceSearch,
} from '../actions/index'
import IC_CLOSE from '../../image/icon/ic-close.svg'

const mapStateToProps = state => {
  return {
    isAdvanceSearchModalShow: state.isAdvanceSearchModalShow,
    advanceSearch: state.advanceSearch,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setAdvanceSearch: data => {
      return dispatch(setAdvanceSearch(data))
    },
    toggleAdvanceSearch: data => {
      return dispatch(toggleAdvanceSearch(data))
    },
  }
}

/**
 * Component for advance search modal, so user can filter specific data.
 * 
 * @component
 * @example
 * <AdvanceSearchModal />
 */
class AdvanceSearchModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isFilterName: true,
      isFilterLocation: false,
      isFilterEmail: false,
      isFilterPhone: false,
    }
    this.handleCloseButton = this.handleCloseButton.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleEnter = this.handleEnter.bind(this)
    this.handleSaveButton = this.handleSaveButton.bind(this)
  }

  /**
   * Handle close button if clicked or enter pressed when focus on the
   * close button, it will close the advance search modal
   */
  handleCloseButton() {
    this.props.toggleAdvanceSearch(!this.props.isAdvanceSearchModalShow)
    this.setState(this.props.advanceSearch)
  }

  /**
   * Handle change checkbox if clicked and will update the state
   * based on which checkbox clicked by its name attribute
   * @param {event} event
   */
  handleChange(event) {
    const { name, checked } = event.target

    this.setState({
      [name]: checked
    })
  }

  /**
   * Handle change checkbox if enter pressed when focus on the
   * checkbox and will update the state based on which checkbox
   * clicked by its name attribute
   * @param {event} event
   */
  handleEnter() {
    const { name, checked } = event.target
    const { key } = event

    if(key == 'Enter') {
      this.setState({
        [name]: !checked
      })
    }
  }

  /**
   * Handle save button when clicked. Update redux state advanceSearch
   * with local advanceSearch and call handleCloseButton function.
   * If nothing checked, show alert message.
   * 
   * @async
   * @param {event} event
   */
  async handleSaveButton() {
    const isNotValid = Object.keys(this.state).every((k) => !this.state[k])

    if(isNotValid) {
      alert('Please select minimal 1')
    } else {
      const advanceSearch = Object.assign({}, this.state)

      await this.props.setAdvanceSearch(advanceSearch)
      this.handleCloseButton()
    }  
  }

  render() {
    const isShow = this.props.isAdvanceSearchModalShow ? ' show' : ''

    return(
      <div className={`modal${ isShow }`} >
        <div className="modal-dialog">
          <img
            className="button-close"
            src={ IC_CLOSE }
            title="Close modal"
            tabIndex="0"
            alt=""
            onKeyPress={ (e) => e.key == 'Enter' && this.handleCloseButton() }
            onClick={ this.handleCloseButton } />

          <div className="modal-head">
            Advance Search
          </div>

          <div className="modal-body">
            <label className="checkbox">
              Search Name
              <input
                type="checkbox"
                tabIndex="0"
                name="isFilterName"
                checked={ this.state.isFilterName }
                onKeyPress={ this.handleEnter }
                onChange={ this.handleChange } />
              <span className="checkmark"></span>
            </label>
            <label className="checkbox">
              Search Location
              <input
                type="checkbox"
                tabIndex="0"
                name="isFilterLocation"
                checked={ this.state.isFilterLocation }
                onKeyPress={ this.handleEnter }
                onChange={ this.handleChange } />
              <span className="checkmark"></span>
            </label>
            <label className="checkbox">
              Search Email
              <input
                type="checkbox"
                tabIndex="0"
                name="isFilterEmail"
                checked={ this.state.isFilterEmail }
                onKeyPress={ this.handleEnter }
                onChange={ this.handleChange } />
              <span className="checkmark"></span>
            </label>
            <label className="checkbox">
              Search Phone
              <input
                type="checkbox"
                tabIndex="0"
                name="isFilterPhone"
                checked={ this.state.isFilterPhone }
                onKeyPress={ this.handleEnter }
                onChange={ this.handleChange } />
              <span className="checkmark"></span>
            </label>
            <p>
              <small>
                Please select minimal 1
              </small>
            </p>
          </div>

          <div className="modal-footer">
            <button
              className="button"
              tabIndex="0"
              onClick={ this.handleSaveButton } >
              Save
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AdvanceSearchModal)
