import React from 'react';

export default function Post(props) {
  console.log(props)

  const {post} = props;
  return (
    <div className="post">
      <div className="post__logo">
        <img alt="" src={props.post.authorAddPost.logo} />
      </div>
      <div className="post__description">
        <div className="post__header">
          <div className="post__user-info">
            <div className="post__user">
              <span className="user-name">{props.post.authorAddPost.name}</span>
              <span className="user-hashtag">{props.post.authorAddPost.nickname}</span>
              <span className="user-data-post">{props.post.date}</span>
            </div>
          </div>
        </div>  
        <span>{post.text}</span>
        <img alt="" src={post.urlImg}/>
        <div className="post__actions">
        <span className="post___like">&#9829;<span>{props.post.like}</span></span>
      </div>
      </div>
    </div>
  );
}
