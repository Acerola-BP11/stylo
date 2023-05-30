'use client'

import Header from './components/Header/Header'
import Main from './components/Main'

export default function Home() {  

  return (    
    <div className="flex max-h-screen w-full flex-col items-center overflow-hidden">
      <Header />
      <Main />      
    </div>
  )
}
