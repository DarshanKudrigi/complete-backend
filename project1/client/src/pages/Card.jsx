import React from 'react'

const Card = () => {
  return (
    <div>
      <section>
        <h1>Create post</h1>
            <form>
              <input type="file" name="image" accept="image/*"/>
              <input type="text" name="caption" placeholder="enter u r name"/>
              <button type="submit">Create Post</button>
            </form>
      </section>
    </div>
  )
}

export default Card
