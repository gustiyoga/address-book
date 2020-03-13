import React, { Component } from 'react'
import { connect } from 'react-redux'
import EMPTY_STATE_IMAGE from '../../image/placeholder/empty-address-book.svg'

const mapStateToProps = state => {
  return {
    addressBook: state.selectedAddressBookIndex !== null ? state.addressBooksFiltered[state.selectedAddressBookIndex] : null,
    selectedAddressBookIndex: state.selectedAddressBookIndex,
  }
}

class AddressBookDetail extends Component {
  emptyStateComponent() {
    return(
      <div className="empty-state">
        <img src={ EMPTY_STATE_IMAGE } width="200" alt="empty state address book detail" />
        <p>
          <strong>
            Please select a contact
          </strong>
        </p>
      </div>
    )
  }
  
  addressBookComponent() {
    const name = `${this.props.addressBook.name?.first} ${this.props.addressBook.name?.last}`
    const imgUrl = this.props.addressBook.picture?.large
    const street = `${this.props.addressBook.location?.street?.number} ${this.props.addressBook.location?.street?.name}`
  
    return(
      <div className="profile">
        <div className="profile-head">
          <div className="profile-photo">
            <img src={ imgUrl } alt={ name } width="128" />
          </div>
          <h3>
            { name }
          </h3>
        </div>

        <div className="profile-section">
          <h4>
            Contact
          </h4>
          <div className="profile-card">
            <p className="title">
              Email
            </p>
            <p className="subtitle">
              <a href={`mailto:${this.props.addressBook.email}`}>
                { this.props.addressBook.email }
              </a>
            </p>

            <p className="title">
              Phone
            </p>
            <p className="subtitle">
              <a href={`tel:${this.props.addressBook.cell}`}>
                { this.props.addressBook.cell }
              </a>
            </p>
          </div>
        </div>

        <div className="profile-section">
          <h4>
            Location
          </h4>
          <div className="profile-card">
            <p className="title">
              Address
            </p>
            <p className="subtitle">
              { street }
            </p>

            <p className="title">
              Zip Code
            </p>
            <p className="subtitle">
              { this.props.addressBook.location?.postcode }
            </p>

            <p className="title">
              City
            </p>
            <p className="subtitle">
              { this.props.addressBook.location?.city }
            </p>

            <p className="title">
              State
            </p>
            <p className="subtitle">
              { this.props.addressBook.location?.state }
            </p>
          </div>
        </div>
      </div>
    )
  }

  render() {
    const data = this.props.addressBook ? this.addressBookComponent() : this.emptyStateComponent()
    const isActive = this.props.selectedAddressBookIndex !== null ? ' active' : ''

    return(
      <div className={`address-detail${isActive}`}>
        { data }
      </div>
    )
  }

}

export default connect(
  mapStateToProps
)(AddressBookDetail)
