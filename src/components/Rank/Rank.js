import React from 'react';

const Rank = ({ name, entries }) => {
  return (
    <div>
      <div className="white f3">
        {`${name}, 您目前使用本服務的次數是`}
      </div>
      <div className="white f1">
        {entries}
      </div>
    </div>
  );
}

export default Rank;