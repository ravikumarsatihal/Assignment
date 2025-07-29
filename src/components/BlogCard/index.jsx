import React from "react";
import { useNavigate } from "react-router-dom";

export default function BlogCard({ post}){
    const navigate = useNavigate();

    return (
        <div
        onClick={() => navigate(`/posts/${post.id}`)}
        className="cursor-pointer p-4 border rounded shadow hover: shadow-md transition ">
            <h3 className="text-lg font-semibold">{post.title}</h3>
            <p className="text-sm text-grey-600  mt-2">{post.body.slice(0,100)}...</p>
        </div>
        
    )
}