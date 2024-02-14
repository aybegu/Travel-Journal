import { useState } from 'react'
import Navbar from './Components/Navbar'
import Card from './Components/Card'
import Footer from './Components/Footer'
import data from './data.js'


function App() {

  const cards = data.map(item => {
    return(
      <Card 
        key = {item.id}
        {...item}
      />
    )
  })
  return (
    <div className='app'>
      <Navbar />
      {/* <Card 
        title = "Lalibela"
        location = "ETHIOPIA"
        googleMapsUrl = "https://goo.gl/maps/SqRum2PchcV1soZ66"
        startDate = "12 Jan, 2021"
        endDate = "24 Jan, 2021"
        description = "Lalibela is a town in the Amhara region of northern Ethiopia. It's known for its distinctive rock-cut churches dating from the 12th and 13th centuries, which are pilgrimage sites for Coptic Christians. Carved out of rock, the subterranean monoliths include huge Bete Medhane Alem, and cross-shaped Bete Giyorgis. Many are joined by tunnels and trenches, and some have carved bas-reliefs and colored frescoes inside."
        imageUrl = "https://assets.vogue.com/photos/5ac2b5296493984c240b6822/master/w_2000,h_1425,c_limit/01-lalibela-ethiopia-is-the-next-machu-picchu.jpg"
      /> */}
      {cards}
      <Footer />
    </div>
  )
}

export default App
