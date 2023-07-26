import { useState } from "react"
import { useDispatch } from "react-redux";
import { postAdded } from "../../features/posts/postsSlice";
import { nanoid } from "@reduxjs/toolkit/dist";


const PostForm = () => {
    const dispatch = useDispatch();

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const onTitleChanged = (event) => setTitle(event.target.value)
    const onContentChanged = (event) => setContent(event.target.value)

    const submitHandler = () => {
        if(title && content) {
            dispatch(
                postAdded({
                    id: nanoid(),
                    title,
                    content
                })
            )
            setTitle("");
            setContent("");
        }
    }
    return(
        <section>
            <h2>Add your new post</h2>
            <form>
                <label htmlFor="postTitle">Post title:</label>
                <input type="text" 
                id ="postTitle" 
                name="postTitle"
                value={title}
                onChange={onTitleChanged}/>
                
                <label htmlFor="content">Content:</label>
                <input type="text" 
                id ="content" 
                name="content"
                value={content}
                onChange={onContentChanged}/>
                <button type="button" onClick={submitHandler}>Save Post</button>
            </form>
        </section>
    )
}

export default PostForm;