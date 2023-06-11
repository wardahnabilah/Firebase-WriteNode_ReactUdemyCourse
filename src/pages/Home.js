import React, { useEffect, useState } from 'react'
import { PostCard } from '../components'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase/config'

export function Home() {
  const colRef = collection(db, "posts")
  const [posts, setPosts] = useState([])

  useEffect(() => {
    async function getPosts() {
      const posts = await getDocs(colRef)
      setPosts(posts.docs)
    }

    getPosts()
  }, [])
  
  return (
    <main className="container">
      {posts.map(post => {
        const { title, description, createdBy } = post.data()

        return  <PostCard
                    key={post.id}
                    id={post.id} 
                    title={title}
                    description={description}
                    createdBy={createdBy}
                />
      })}
    </main>
  )
}
