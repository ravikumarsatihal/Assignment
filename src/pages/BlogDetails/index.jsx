import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CommentForm from "../../components/CommentForm";
import { fetchPostRequest } from "../../redux/actions/blogActions";

export default function  blogDetails(){
    const { id} = useParams();
    const dispatch = useDispatch();
    const { post ,lodingPost } = useSelector((state) => state.blog);
    const [comments,setComments] =useState([]);


    useEffect(()=> {
        dispatch(fetchPostRequest(id));
    },[dispatch,id]);

    const handleAddComment = (comment) => {
        setComments((prev) => [...prev, comment])
    }

    if (lodingPost || !post) return <p>Loading....</p>

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold">{post.title}</h2>
            <p className="mt-2">{post.body}</p>

            <div className="my-6">
                <h3 className="text-lg font-semibold mb-2">Comments</h3>
                {comments.length === 0 ? (
                    <p className="text-grey-500">No comments yet</p>
                ):(
                    <ul
                    className="space-y-2">
                        {
                            comments.map((c,i) => (
                                <li key={i} className="bg-grey-100 p-2 rounded">
                                    <strong>{c.name}:</strong> { c.body}
                                </li>
                            ))
                        }
                    </ul>
                )}
            </div>
            <CommentForm onAddComment={handleAddComment} />
        </div>

    
    )
}