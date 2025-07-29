import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BlogCard from "../../components/BlogCard";
import { fetchPostRequest} from '../../ redux/actions/blogActions'


export default function BlogList(){
    const dispatch = useDispatch();
    const { list,loadingList}= useSelector((state) => state.blog)

    useEffect(() => {
        dispatch(fetchPostRequest())
    },[dispatch])

    return (
        <div className="p-4">
            <h2 className="text-x1 font-bold mb-4"> Blogs</h2>
            {loadingList ? (
                <p>Loading...</p>
            ):(
                <div className=" grid-gap-4 md:grid-cols-2">{
                    list.map((post) => (
                        <BlogCard key={post.id} post={post} />
                    ))
                }
            
        </div>
    )
}
</div>
    )
}