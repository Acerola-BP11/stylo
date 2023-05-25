import Header from './components/Header/Header'
import Main from './components/Main'

export default function Home() {  

  return (    
    <div className="flex min-h-screen flex-col items-center">
      <Header />
      <Main />      
    </div>
  )
}
