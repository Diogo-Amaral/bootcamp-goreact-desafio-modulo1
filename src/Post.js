import React from 'react';
import PostHeader from './PostHeader';

const Post = props => (
  <div className="post">
    <PostHeader avatar={props.posts.avatar} name={props.posts.name} time={props.posts.time} />
    <p className="post-content">{props.posts.content}</p>
  </div>
);

export default Post;
