import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export function SkeletonCard() {
  return (
    <div className="postcard-container">
        <h3><Skeleton width="16rem"/></h3>
        <p className="content"><Skeleton count={2}/></p>
        <div><Skeleton width="6rem"/></div>
    </div>
  )
}