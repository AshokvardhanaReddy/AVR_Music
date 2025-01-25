import React, { useContext } from 'react'
import { PlayerContext } from '../context/PlayerContext'

const SongItem = ({ name, image, desc, id }) => {

  const { playWithId } = useContext(PlayerContext);

  return (
    <div onClick={() => playWithId(id)} className=' min-w-[180px] bg-[lightgray] hover:bg-[gray] hover:text-white p-2 rounded cursor-pointer'>
      <img className='rounded' src={image} alt="currently running song" />
      <p className='text-center font-bold mt-2 mb-1 bg-inherit'>{name}</p>
      {/* <p className=' text-slate-200 text-sm'>{desc}</p> */}
    </div>
  )
}

export default SongItem