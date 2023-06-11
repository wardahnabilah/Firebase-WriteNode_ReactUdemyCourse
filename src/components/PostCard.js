import React from 'react'
import { deleteDoc, doc } from 'firebase/firestore'
import { auth, db } from '../firebase/config'
import { useAuthContext } from '../context/AuthContext'
import "./PostCard.css"

export function PostCard({ id, title, description, createdBy, postUpdated, setPostUpdated }) {
  const { isLoggedIn } = useAuthContext()
  
  async function handleDelete() {
    const post = doc(db, "posts", id)
    

    deleteDoc(post)

    setPostUpdated(!postUpdated)
  }
  
  return (
    <div className="postcard-container">
        <div className="title">
          <h3>{title}</h3>
          {isLoggedIn && auth.currentUser.uid === createdBy.userId && <i onClick={handleDelete} className="bi bi-trash-fill delete"></i>}
        </div>
        <p className="content">{description}</p>
        <div className="createdby">Created by: {createdBy.userName}</div>
    </div>
  )
}
