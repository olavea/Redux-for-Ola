import React from 'react';

const Comments = React.createClass({
  renderComment(comment, i) {
    console.log(comment);
    return (
      <div className="comment" key={i}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button className="remove-comment">&times;</button>
        </p>
      </div>
    )
  },
  handleSubmit(e) {
    e.preventDefault(); //will stop the page from refreshing "e" means event
    // Copied from Wes Bos video 14 down to ->
    console.log("Submitting the form!"); //open up my console <tallet øker på Submitting the form!>
    // Get the text out of these inputs here
    console.log(this.refs) // refs is going to be populated with what we put refs on
    const { postId } = this.props.params; // first create the id. // { postId } is ES6 restructuring
    const author = this.refs.author.value;
    const comment = this.refs.comment.value;
    console.log(postId, author, comment)
    // Uncaught TypeError Cannot read property 'postId' of undefined
    // 3:33 go through my debugging process here
    // looks like it is looking for 'postId' for params.
    // Does this component not have the params?
    // I go to the react console
    // search
    // We are in the Comments component
    // <He clicks <Comments ... 
    // <show up on the right
    // We clearly does not have params <cannot see params there under props
    // -> Copied from Wes Bos video 14
    
    this.props.addComment(postId, author, comment);
    this.refs.commentForm.reset();
  },

  render() {
    return (
      <div className="comments">
        {this.props.postComments.map(this.renderComment)}
        <form ref="commentForm" className="comment-form" >
          <input type="text" ref="author" placeholder="author"/>
          <input type="text" ref="comment" placeholder="comment"/>
          <input type="submit" hidden />
        </form>
      </div>
    )
  }
});

export default Comments;

// from Wes Bos video 13: Displaying the Single Photo Component
// We already are displaying a list of photos, but what about when you click through to the Single photo component? 
