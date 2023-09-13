// import posts from '../posts.json'

// function Article () {
//     return (
//         <>
//         {posts.map((blog) => {
//             return (
//                 <>
//                     <h3>{blog.title}</h3>
//                     <small>Date : {blog.date}, tags : {blog.tags.join(", ")}</small>
//                 </>
//             )
//         })}
//         </>
//     );
// }
import { useContext } from "react";
import { GlobalContext } from "../context";

const ArticleStatus = ({ isNew }) => {
    return isNew && <span>-- Baru!!</span>
}

function Article (props) {
    const user = useContext(GlobalContext)

    return (
        <>
            <h3>{props.title}</h3>
            <small>
                Date : {props.date}, tags : {props.tags.join(", ")}
                <ArticleStatus isNew={props.isNew}/>
            </small>
            <div>
                <small><i>Ditulis oleh {user.username}</i></small>
            </div>
        </>
    )
}

export default Article;