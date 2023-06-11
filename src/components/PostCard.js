import React from 'react'
import "./PostCard.css"

export function PostCard({ id, title, description, createdBy }) {
  return (
    <div className="postcard-container">
        <h3 className="title">{title}</h3>
        <p className="content">{description}</p>
        <div className="createdby">Created by: {createdBy.userName}</div>
    </div>
  )
}
