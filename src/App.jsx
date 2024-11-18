import { useState } from 'react'
import './App.css'
import Header from './component/header'
import Content from './component/content'
import Footer from './component/footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Content/>
      <Footer/>
    </>
  )
}

export default App
