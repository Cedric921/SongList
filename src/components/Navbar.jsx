import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext'

const Navbar = (props) => {
  const { books } = useContext(BookContext)

  return (
    <div className='navbar'>
      <h3>VB reading books</h3>
      <p>You have now {books.lenght} books. </p>
    </div>
  )
}

export default Navbar
