import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { nanoid } from "nanoid";


function Posts() {
  

  const [state, setState] = useState({
    id: "",
    title: "",
    blogPost: "",
    date: new Date(),
    voteCount: 0,

    posts: [
      {
        id: nanoid(),
        title: "Isaiah 41:10 (NKJV)",
        blogPost: "Fear not, for I am with you; be not dismayed, for I am your God; I will strengthen you, I will help you, I will uphold you with my righteous right hand.",
          
        date: new Date(),
        voteCount: 0,
      },
    ]
  });

  function handleChange(e) {
    setState({ ...state, [e.target.name]: e.target.value });
  }


  function postDelete (id) {
    setState({...state, posts: state.posts.filter(data=>data.id !==id)})
  }

  function postEdit (post) {
setState({...state, id: post.id, title:post.title, blogPost:post.blogPost, date:post.date, voteCount: post.voteCount})
  }

  function postUpvote (index, voteCount) {
    state.posts[index].voteCount= voteCount +1
setState({...state, posts: state.posts})
  }

  function postDownVote (index, voteCount) {
    state.posts[index].voteCount= voteCount - 1
    setState({...state, posts: state.posts})
  }




  function handlePostArticle(e) {
    let id=state.id;
    let blogTitle = state.title;
    let blogPost = state.blogPost;
    let postDate = new Date();
    if (id !==undefined && id !==null && id !=="") {
    const postIndex=state.posts.findIndex(data=> data.id === id)
    let post = {id: id, title: blogTitle, blogPost: blogPost, date: state.date, voteCount:state.voteCount};
      setState({
        ...state,
        id: "",
        title: "",
        blogPost: "",
      });
      state.posts[postIndex]=post;
    } else {
      let post = {id: nanoid(), title: blogTitle, blogPost: blogPost, date: postDate, voteCount:0};
      setState({
        ...state,
        id: "",
        title: "",
        blogPost: "",
      });

      state.posts.push(post);
    } 
  }




  return (
    <div className="container">
      <div className="row"> 
      <div className="col-md-8 offset-md-2">
        <h4 className="text-center mt-4">BLOG APP: PreMest Soronko Group 2</h4>
      <form>
        <input
          type="text"
          placeholder="Post Title"
          name="title"
          onChange={handleChange}
          value={state.title}
          className="form-control"
          required
        />{" "}
        <br />
        <textarea
          placeholder="Blog Post"
          name="blogPost"
          onChange={handleChange}
          value={state.blogPost}
          required
          className="form-control"
        />{" "}
        <br />
        <button type="button" onClick={handlePostArticle} className="btn btn-primary">Post Article</button>
      </form>

      <ul className="list-unstyled mt-4">
        {state.posts.map((post, index) => 
          <li key={post.id} className="media mb-3">
            
            <div className="media-body">
            <h5><b>{post.title}</b> 
            <small className="text-muted ml-2">
          {post.date.getFullYear() + "-" + (post.date.getMonth() + 1) + "-" + post.date.getDate()}
            </small>
            </h5>
            
            <p className="mb-0 display-5">{post.blogPost}</p>
           
           <span className="badge badge-info">Vote Count: {post.voteCount}</span>

            <div className="mt-1">
            <button onClick={()=>postDelete(post.id)} className="btn btn-danger btn-sm mr-1">Delete Post</button>
            <button onClick={()=>postEdit(post)} className="btn btn-success btn-sm mr-1">Edit Post</button>
            <button onClick={()=>postUpvote(index, post.voteCount)} className="btn btn-info btn-sm mr-1">UpVote</button>
            <button onClick={()=>postDownVote(index, post.voteCount)} className="btn btn-info btn-sm mr-1">DownVote</button>
            </div>
            </div>
          </li>
        )}
      </ul>
    </div>
    </div>
    </div>
  );
}

export default Posts;
