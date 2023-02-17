import React from 'react'
import post from '../data/posts'
import { NavLink } from 'react-router-dom'

const Blog = () => {
  return (
    <div>
      <h2>Blog</h2>
      <ul>
        {post.map((item) => {
          return (
            <li key={item.id}>
              <NavLink to={`/post/${item.id}`}>{item.titulo}</NavLink>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Blog