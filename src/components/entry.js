import React from 'react';

function Entry({ data }) {
  return (
    <div className="entry">
      
      <div className="price">
        <p className="price_text">
          ${data.price}
        </p>
      </div>

      <div className="text">
        <p className="date">
          {data.date}
        </p>
        <p className="web">
          {data.web}
        </p>
      </div>
      
    </div>
  );
}

export default Entry;