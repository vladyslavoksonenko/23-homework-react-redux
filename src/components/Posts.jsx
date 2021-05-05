import React from 'react';
import Post from './Post';
import { connect } from 'react-redux';

const Posts = ({posts}) => {
  // const PAVEL_DUROV = "https://upload.wikimedia.org/wikipedia/commons/6/68/TechCrunch_Disrupt_Europe_Berlin_2013_%2810536888854%29_%28cropped%29.jpg";
  // const RAY_IMAGE = "https://telegram.org/file/464001284/3/rHzxN3afclE.253809/78fbb9de14cac31e08";
  // const RAY_IMAGE2 = "https://telegram.org/file/464001519/2/pw2YpXpzBFk.222382/9ec672b0125c50ad34";
  if (!posts.length) {
    return <p>Пости поки відсутні</p>
  }
  return posts.map(post => <Post post={post} key={post.id} />)
     
}

const mapStateToProps = (state) => {
  return { 
    posts: state.posts
  }
}

export default connect(mapStateToProps , null)(Posts);