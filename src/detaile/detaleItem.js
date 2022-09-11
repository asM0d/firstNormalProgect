import React from "react";

const DetailedItem = ({ detailItemData }) => { 
    const AddressStreetAddress =detailItemData&&detailItemData.address? detailItemData.address.streetAddress: null
    const AddressCity =detailItemData&&detailItemData.address? detailItemData.address.city: null
    const AddressState =detailItemData&&detailItemData.address? detailItemData.address.state: null
    const AddressZip =detailItemData&&detailItemData.address? detailItemData.address.zip: null

    return (
    <div>
      id: <b>{detailItemData.id}
      </b>
      <dt />
      firstName: <b>{detailItemData.firstName}</b>
      <dt />
      lastName: <b>{detailItemData.lastName}</b>
      <dt />
      email: <b>{detailItemData.email}</b>
      <dt />
      phone: <b>{detailItemData.phone}</b>
      <dt />
      address: <b>{AddressStreetAddress}</b>
      <dt />
      city: <b>{AddressCity}</b>
      <dt />
      State: <b>{AddressState}</b>
      <dt />
      Zip: <b>{AddressZip }</b>
      <dt />
      descriptiom: <b>{detailItemData.description }</b>
      <dt />
    </div>
  );
};
export default DetailedItem;
