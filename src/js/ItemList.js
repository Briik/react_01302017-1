import React from 'react';

const ItemList = (props) => {
    return (
      <ul>
        {props.items.map(e =>
          <li key={`${e}-li`}>{e}</li>
        )}
      </ul>
    );
};

export default ItemList;
