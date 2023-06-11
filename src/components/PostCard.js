import React from 'react'
import "./PostCard.css"
import { deleteDoc, doc } from 'firebase/firestore'
import { db } from '../firebase/config'

export function PostCard({ id, title, description, createdBy }) {
  
  async function handleDelete() {
    const post = doc(db, "posts", id)

    deleteDoc(post)
  }
  
  return (
    <div className="postcard-container">
        <div className="title">
          <h3>{title}</h3>
          <i onClick={handleDelete} className="bi bi-trash-fill delete"></i>
        </div>
        <p className="content">{description}</p>
        <div className="createdby">Created by: {createdBy.userName}</div>
    </div>
  )
}
