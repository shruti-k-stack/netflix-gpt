import React from 'react'
import { BASE_IMG_CDN } from '../utils/constants'

export const MovieCard = ({ title, poster }) => {
  return (
    <div>
      <img src={`${BASE_IMG_CDN}${poster}`} alt={title} />
    </div>
  )
}
