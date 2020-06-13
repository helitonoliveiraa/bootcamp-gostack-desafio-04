import React from 'react';
import Comment from '../Comment/index';

import './styles.css';

function Post({ data }) {
  return (
    <section className="post">
      <div className="content">
        <div className="info">
          <img src={data.author.avatar} />

          <div className="author">
            <strong>{data.author.name}</strong>
            <span>{data.date}</span>
          </div>
        </div>

        <p>{data.content}</p>

        {data.comments.map(comment => <Comment key={comment.id} data={comment} />)}
      </div>
    </section>
  );
}

export default Post;