
import React from 'react';
import Photo from './Photo';
import Comments from './Comments';

const Single = React.createClass({
  render() {

    const { postId } = this.props.params;
    // index of post
    const i = this.props.posts.findIndex((post) => post.code === postId);
    // get us the post
    const post = this.props.posts[i];
    // console.log(post);
    const postComments = this.props.comments[postId] || [];

    return (
      <div className="single-photo">
        <Photo i={i} post={post} {...this.props} />
        <Comments postComments={postComments} {...this.props} />
      </div>
    )
  }
});

export default Single;

// from Wes Bos video 13: Displaying the Single Photo Component
// We already are displaying a list of photos, but what about when you click through to the Single photo component? 
