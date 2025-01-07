import {  useRef} from 'react'
import { Route, Routes} from 'react-router-dom'
import DisplayAlbum from './DisplayAlbum'

import HomePage from '../pages/HomePage';
import AlbumsPage from "../pages/AlbumsPage";
import RecentlyPlayed from '../pages/RecentlyPlayed';
import WorkPending from './WorkPending';

const Display = () => {
  const displayRef = useRef();

  return (
    <div ref={displayRef}  className='h-[100%]'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path = "/albums" element = {<AlbumsPage/>} />
        <Route path='/albums/:id' element={<DisplayAlbum />} />
        <Route path = "/artists" element = {<WorkPending title = "Work In Progress ...." />} />
        <Route path = "/genres" element = {<WorkPending title = "Work In Progress ...." />} />
        <Route path = "/recent-play" element = {<RecentlyPlayed/>} />
        <Route path = '/favourites' element = {<WorkPending title = "Work In Progress ...." />} />
      </Routes>
    </div>
  )
}

export default Display