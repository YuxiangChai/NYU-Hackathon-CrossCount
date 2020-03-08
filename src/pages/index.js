import React from 'react';

import Entry from '../components/entry';
import Data from './script.js';

function List() {
  return (
    <div>
      {Data.map((entry, i) => (
        <Entry key={i} data={entry}/>
      ))}
    </div>
  );
}

export default List;