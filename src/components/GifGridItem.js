import React from 'react'

export const GifGridItem = ({image}) => {
  return (
    <div className='card animate__animated animate__fadeIn'>
      <img src={image.url} alt={image.title}/>
      <p>{image.title}</p>
    </div>
  )
}
