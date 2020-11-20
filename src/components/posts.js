import React, {useState} from 'react'
import Vote from "./components/Vote"

function Posts() {
    const {title, setTitle}= useState ("")
    const {author, setAuthor} = useState ("")
    const {content, setContent}= useState("")
    const {post, setPost}= useState([]);

    const handleTitle = event => {
        setTitle(event.target.value);
    };

    const handleAuthor = event => {
        setAuthor(event.target.value);
    };

    const handleContent = event => {
        setContent(event.target.value);
    };

    const handlePost = (event) => {
        event.PreventDefault();
        setPost([
            ...post,
            {
                 
                title: title,
                content: content,
                author: author
            }
        ]);
        setAuthor("")
        setTitle("")
        setContent("")
    };

    return (
        <div>
            <form>
            <label>Title</label>
            <input value={title} onChange={handleTitle}/>
            <label>Author</label>
            <input value={author} onChange={handleAuthor} />
            <label>Content</label>
            <input value={content} onChange={handleContent} />

            <input type="submit" onClick={handlePost} />

            </form>
            

            
                {/* <ul>
                    {post .map((post) =>(
                        <li key={post.id}>
                            {post.title} {post.author} {post.content}
                        </li>

                    ) )}
                </ul> */}
        
        </div>
    )



}

export default Posts