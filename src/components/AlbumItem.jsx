import React from 'react'
import { useNavigate } from 'react-router-dom'

const AlbumItem = ({ image, name, desc, id }) => {

  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/albums/${id}`)} className=' min-w-[180px] bg-[lightgray] hover:bg-[gray] hover:text-white p-2  rounded cursor-pointer'>
      <img className='rounded' src={image} alt="album" />
      <p className='text-center font-bold mt-2 mb-1 bg-inherit '>{name}</p>
    </div>
  )
}

export default AlbumItem