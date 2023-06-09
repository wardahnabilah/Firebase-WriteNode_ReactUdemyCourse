import React from 'react'
import './CreatePost.css'

export function CreatePost() {
  return (
    <main className="container">
        <h1 className="create-heading">Add New Post</h1>
        <form className="create-form">
            <input type="text" name="title" placeholder="Title"/>
            <textarea name="description" placeholder="Description" cols="30" rows="10"></textarea>
            <button className="btn-primary">Create</button>
        </form>
    </main>
  )
}
