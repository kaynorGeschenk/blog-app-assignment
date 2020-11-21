import React, {useState} from 'react'
import {nanoid} from 'nanoid';
//import Vote from "./ components/Vote"

function Posts() {
    constructor(props); {
        super(props);
        this.state = {Posts}
    }
    
    const {posts, setPosts}= useState([]);
    const {title, setTitle}= useState ("")
    const {author, setAuthor} = useState ("")
    const {content, setContent}= useState("")
    

    const handleTitle = event => {
        setTitle(event.target.value);
    };

    const handleAuthor = event => {
        setAuthor(event.target.value);
    };

    const handleContent = event => {
        setContent(event.target.value);
    };

    const handlePosts = (event) => {
        event.PreventDefault();
        setPosts([
            ...posts,
            {
                id: nanoid(),
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
            <input value={author} onChange={(e) => handleAuthor(e)} />
            <label>Content</label>
            <input value={content} onChange={ (e) => handleContent(e)} />

            <input type="submit" onClick={handlePosts} />

            </form>
            

            
                {/* <ul>
                    {posts.map((posts) => (
                        <li key={posts.id}>
                            {posts.title} {posts.author} {posts.content}
                        </li>
                    ))}
                </ul> */}
 
                    {/* < Vote /> */}
        </div>
        
    );

}

export default Posts