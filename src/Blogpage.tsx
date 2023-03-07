import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

const Blogpage = () => {

    const [posts, setPosts] = useState<Array<{userId: number, id: number, title: string, body: string}>>([])

    console.log(posts)
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])

    return (
        <div className={'center'}>
            <h1>BlogPage</h1>
            {
                posts.map(post => (
                    <Link key={post.id} to={`/posts/${post.id}`}>
                        <li>{post.title}</li>
                    </Link>
                ))
            }
        </div>
    );
};

export default Blogpage;