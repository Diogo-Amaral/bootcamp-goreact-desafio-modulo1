import React from 'react';
import PropTypes from 'prop-types';

const PostHeader = props => (
  <div className="post-header">
    <img src={props.avatar} alt="" />
    <div className="post-data">
      <strong>{props.name}</strong>
      <small>{props.time}</small>
    </div>
  </div>
);

PostHeader.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

export default PostHeader;
