import React, { useContext, useState } from 'react'
import { BookContext } from '../contexts/BookContext'

const BookForm = () => {
  const { addBook } = useContext(BookContext)
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')

  const handlerSubmit = (e) => {
    e.preventDefault()
    addBook(title, author)
    setTitle('')
    setAuthor('')
  }
  return (
    <form onSubmit={(e) => handlerSubmit(e)}>
      <input
        type='text'
        required
        placeholder='Book title'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type='text'
        required
        placeholder='Author'
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <input type='submit' value='add Book' />
    </form>
  )
}

export default BookForm
