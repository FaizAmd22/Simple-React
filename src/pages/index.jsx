import { useState } from "react";
import Article from "../components/Article";
import Search from "../components/Search";
import postsData from "../posts.json"

function Homepage() {
    const [posts, setPosts] = useState(postsData)
    const [totalPosts, setTotalPosts] = useState(0)

    const onSearchChange = (value) => {
        const filteredPosts = postsData.filter(item => item.title.includes(value))
        setPosts(filteredPosts)
        setTotalPosts(filteredPosts.length)
    }


    return (
        <>
            <h1>Simple Blog</h1>
            <Search onSearch={onSearchChange} totalPosts={totalPosts}/>
            {posts.map((props, index) => (
                    <Article {...props} key={index}/>
            ))}
            <hr />
        </>
    );
}

export default Homepage