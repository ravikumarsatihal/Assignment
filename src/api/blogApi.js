
import axios from "axios";

export const fetchPosts = (params) => 
    axios.get(`https://dummyjson.com/posts`,{ params });


export const fetchPostById = (id) => 
    axios.get(`https://dummyjson.com/posts/${id}`)