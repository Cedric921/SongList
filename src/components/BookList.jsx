import React, { Component } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

class BookList extends Component {
  static contextType = ThemeContext
  render() {
    const { isLightTheme, light, dark } = this.context
    const theme = isLightTheme ? light : dark
    return (
      <ThemeContext.Consumer>
        {(context) => {
          return (
            <div
              className='book-list'
              style={{ color: theme.syntax, background: theme.bg }}
            >
              <ul>
                <li style={{ background: theme.ui }}>the way of king</li>
                <li style={{ background: theme.ui }}>the name of the wind</li>
                <li style={{ background: theme.ui }}>the final empire</li>
              </ul>
            </div>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default BookList
