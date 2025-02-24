import React, { lazy, Suspense } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router'

const Engine = lazy(()=>import('./components/Engine'));
const LandingPage = lazy(()=>import('./components/LandingPage'));

export default function App(){

  return(<>
    <div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/engine' element={<Engine/>}/>
      </Routes>
    </BrowserRouter>
      <Suspense fallback={<p>Loading...</p>}>
        {/* <LandingPage/>
        <Engine/> */}
      </Suspense>
    </div>
  </>)
}