import React from 'react'

export const getPosts = async()=> {
    const resp= await fetch("https://jsonplaceholder.typicode.com/posts",{method: "GET"});
    return await resp.json();
}
