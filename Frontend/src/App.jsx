import React, { lazy, Suspense } from 'react'

const Engine = lazy(()=>import('./components/Engine'))

export default function App(){

  return(<>
    <div>
      <Suspense fallback={<p>Loading...</p>}>
        <Engine/>
      </Suspense>
    </div>
  </>)
}