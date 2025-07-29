import React, { useState } from "react";

export default function CommentForm({ onAddComment }){
    const [ name , setName ] = useState('');
    const [ body , setBody ] = useState('');
    const [ error ,setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name.trim() || !body.trim()){
            setError('please fill the both fields....')
            return ;

        }
        onAddComment({ name,body });
        setName('');
        setBody('');
        setError('');
    };

    return (
        < form onSubmit ={ handleSubmit} className="mt-4 space-y-4"
        >{error && <p className="text-red-600">{error}</p>}
        <div>
            <label className="block">Name</label>
            <input
            type='text'
            className="border p-2 w-full-rounded"
            value = {name}
            placeholder="your name ...."
            onChange={(e) => setName(e.target.value)}
            />
        </div>

        <div>
            <label className="block">Comment</label>
            <textarea
            type='text'
            className="border p-2 w-full-rounded"
            value = {body}
            placeholder=" write a comment ...."
            onChange={(e) => setBody(e.target.value)}
            />


        </div>

        <button
        type = 'submit'
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        > Submit</button>
        </form>
    )

}