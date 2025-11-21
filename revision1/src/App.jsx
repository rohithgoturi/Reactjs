import React from 'react'
import Card from './components/Card'
import Header from './components/Header'

const App = () => {
  return (
    <div>
      <Header />
      <Card user="Rohith Goturi" role="full stack developer"/>
      <Card user="Pritish Mandal" role="UI/UX developer"/>
      <Card user="Shrutika Dandale" role="Frontend developer"/>
      <Card user="Shruti Uthale" role="AI developer"/>
    </div>
  )
}

export default App
