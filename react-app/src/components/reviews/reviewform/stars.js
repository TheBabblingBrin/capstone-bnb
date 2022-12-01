import React, { useState } from "react"
import { AiFillStar } from "react-icons/ai"
import '../index.css'

const StarHovering = ({ stars, setRating }) => {
  const [hover, setHover] = useState(null)

  return (
    <div className="stars-wrapper">
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1

        return (
          <label>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={()=>setRating(ratingValue)}
            />
            <AiFillStar
              className="star"
              color={ ratingValue <= (hover||stars) ? "rgb(255,92,98)":"#e4e5e9"}
              size={20}
              onMouseEnter={()=>setHover(ratingValue)}
              onMouseLeave={()=>setHover(null)}
            />
          </label>
        )
      })}
    </div>
  )
}

export default StarHovering
