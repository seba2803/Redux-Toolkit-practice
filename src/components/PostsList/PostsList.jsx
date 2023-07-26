import { useSelector } from "react-redux"
import style from "./PostsList.module.css"


const PostsList = () => {
    const posts = useSelector(state => state.posts);

    const renderPosts = posts.map((post) => (
        <article key={post.id} >
            <h3>{post.title}</h3>
            <p>{post.content.substring(0,100)}</p>
        </article>
    ))

    return (
        <section className={style.section}>
            <h2>Posts</h2>
            {renderPosts}
        </section>
    )
}

export default PostsList;