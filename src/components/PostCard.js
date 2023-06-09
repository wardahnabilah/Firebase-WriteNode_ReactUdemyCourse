import React from 'react'
import "./PostCard.css"

export function PostCard() {
  return (
    <div className="postcard-container">
        <h3 className="title">Title</h3>
        <p className="content">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus laborum placeat culpa repellendus. Possimus nostrum eos quibusdam eum asperiores quia autem rerum.</p>
        <div className="createdby">Created by: User</div>
    </div>
  )
}
