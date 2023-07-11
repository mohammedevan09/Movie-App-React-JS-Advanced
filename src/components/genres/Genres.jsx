import React from 'react'
import './genres.scss'
import { useSelector } from 'react-redux'

const Genres = ({ data }) => {
  const { genres } = useSelector((state) => state.home)

  return (
    <div className="genres">
      {data?.map((g) => {
        // console.log(g)
        if (!genres[g]?.name) return
        return (
          <div key={g} className="genre">
            {genres[g]?.name}
          </div>
        )
      })}
    </div>
  )
}

export default Genres
