import { useState, useEffect } from "react";

function Posts() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => {
                console.log(res);
                return res.json();
            })
            .then((data) => {
                console.log(data);
                setPosts(data);
                setLoading(false);
            });
    }, []);   

    if (loading) return <p>Loading.....</p>;

    return (
        <>
            <div>
                <h2>Posts</h2>
                {posts.map((post) => (
                    <div key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                        <hr />
                    </div>
                ))}
            </div>
        </>
    );
}

export default Posts;
