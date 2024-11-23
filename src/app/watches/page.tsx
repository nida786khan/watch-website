import React from 'react'

const watches = () => {


 
  const watchData = [
    {
      id: 1,
      name: 'Apple Watch Series 5',
      price: 499.99,
      image: 's1.webp'
    },
    {
      id: 2,
      name: 'Apple Watch Series 6',
      price: 599.99,
      image: 's2.avif'
    },
    {
      id: 3,
      name: 'Apple Watch Series 7',
      price: 699.99,
      image: 's3.jpg'
    },
    {
      id: 4,
      name: 'Apple Watch Series 5',
      price: 499.99,
      image: 's4.webp'
    },
    {
      id: 5,
      name: 'Apple Watch Series 6',
      price: 599.99,
      image: 's5.avif'
    },
    {
      id: 6,
      name: 'Apple Watch Series 5',
      price: 499.99,
      image: 's6.webp',
    },
    
  ]


  return (
    <div>
      <div className='watches'>
        {watchData.map(watch => (
          <div key={watch.id} className='watch-card'>
            <img src={watch.image} alt={watch.name} />
            <h3>{watch.name}</h3>
            <p>${watch.price}</p>
            <button>Add to Card</button>
          </div>
        ))}
      </div>

    
    </div>
  )
}

export default watches