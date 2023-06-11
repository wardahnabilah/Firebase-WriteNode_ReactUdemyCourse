import React from 'react'
import { useNavigate } from 'react-router-dom'
import { collection, addDoc } from 'firebase/firestore'
import { auth, db } from '../firebase/config'
import { useDocTitle } from '../hooks/useDocTitle'
import './CreatePost.css'

export function CreatePost() {
  const colRef = collection(db, "posts")
  const navigate = useNavigate()

  useDocTitle("Create Post - WriteNode")

  async function handleSubmit(event) {
    event.preventDefault()

    const title = event.target.title.value
    const desc = event.target.description.value

    await addDoc(colRef, {
      title: title,
      description: desc,
      createdBy: {
        userId: auth.currentUser.uid,
        userName: auth.currentUser.displayName
      }
    })

    navigate("/")
  }
  
  return (
    <main className="container">
        <h1 className="create-heading">Add New Post</h1>
        <form onSubmit={handleSubmit} className="create-form">
            <input type="text" name="title" placeholder="Title"/>
            <textarea name="description" placeholder="Description" cols="30" rows="10"></textarea>
            <button className="btn-primary">Create</button>
        </form>
    </main>
  )
}
