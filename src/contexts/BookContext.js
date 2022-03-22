import React, { createContext, useState } from 'react'
import { uuid } from 'uuid'

export const BookContext = createContext()

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { title: 'name of the winds', author: 'Cedric karungu vb', id: 1 },
    { title: 'the final empire', author: '', id: 2 },
  ])

  const addBook = (title, author) => {
    const id = Math.random()
    setBooks([...books, { title, author, id }])
  }

  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id))
  }

  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  )
}

export default BookContextProvider
