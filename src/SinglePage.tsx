import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";


const SinglePage = () => {

    const {id} = useParams()
    const [post,setPost] = useState<{userId: number, id: number, title: string, body: string}>()

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPost(data))
    }, [id])

    return (
        <div className={'center'}>
            {post && (
                <>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                </>
            )}
        </div>
    );
};

export default SinglePage;