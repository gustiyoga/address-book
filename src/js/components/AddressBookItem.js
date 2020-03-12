import React, { Component } from 'react'

class AddressBookItem extends Component {
  render() {
    const item = this.props.item

    return(
      <div className="address-item">
        <img />

        <div>
          <h3>
            { `${item.name.first} ${item.name.last}` }
          </h3>
          <a href={`tel:${item.cell}`}>
            { item.cell }
          </a>
          <p>
            { `${item.location.city}, ${item.location.state}, ${item.location.country}` }
          </p>
        </div>
      </div>
    )
  }
}

export default AddressBookItem
