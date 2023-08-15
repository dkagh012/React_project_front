import React, { useState } from 'react';
import DaumPostcode from 'react-daum-postcode';

const Test = () => {
  const [openPostcode, setOpenPostcode] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState({
    address: '',
    zonecode: ''
  });

  const handle = {
    clickButton: () => {
      setOpenPostcode(current => !current);
    },

    selectAddress: (data) => {
      const { address, zonecode } = data;
      setSelectedAddress({ address, zonecode });
      setOpenPostcode(false);
    },
  };

  return (
    <div>
      {openPostcode && (
        <DaumPostcode
          onComplete={handle.selectAddress}
          autoClose={false}
          defaultQuery="Pangyoyeok-ro 235"
        />
      )}

      {/* Input box to display the selected address */}
      <input
        value={selectedAddress.address}
        placeholder="Selected Address"
        onClick={handle.clickButton}
        readOnly
      />
    </div>
  );
};

export default Test;
