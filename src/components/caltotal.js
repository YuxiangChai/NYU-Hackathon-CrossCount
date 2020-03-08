import React from 'react';
import Data from './data.json'

function Cal() {
  var i;
  var total=0.0;
  for (i=0; i<Data.length; i++) {
    total = total + parseFloat(Data[i].price);
  }
  return (
    <div className="total">
      <p>Total: $  <strong>{total}</strong></p>
    </div>
  );
}

export default Cal;