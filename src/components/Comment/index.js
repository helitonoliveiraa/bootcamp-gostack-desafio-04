import React from 'react';

import './styles.css';

function Comment({ data }) {
  return (
    <div className="comment">
      <div className="comment-content">
        <img src={data.author.avatar} />
        <div className="text">
          <p>
            <span>{data.author.name}</span>
            {data.content}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Comment;