import React from 'react'
import { Outlet, Route, Router, Routes } from 'react-router-dom'
import ResponsiveAppBar from '../components/ResponsiveAppBar'
import Characters from './Characters'
import Episodes from './Episodes'
import Locations from './Locations'
import SingleCharacter from './SingleCharacter'

export default function Home() {
  return (
      
    <>
        <ResponsiveAppBar />
        <Routes>
            <Route path='characters' 
                element={
                    <>
                        <Outlet />
                        <Characters />
                    </>
                    } 
            
            >
                {/* <Route index element={<Characters />} /> */}
                <Route path=':id' element={<SingleCharacter />} />
            </Route>
            <Route path='locations' element={<Locations />}></Route>
            <Route path='episodes' element={<Episodes />}></Route>
        </Routes>
    
    </>
  )
}
