// // export default function Navigation() {
// //     return (
// //       <nav className='back-ground'>
// //     <ul>
// //         <a className='active' href='#home'>Home</a>
// //         <a className='active' href='#news'>News</a>
// //         <a className='active' href='#about'>About</a>
// //         <a className='active' href='#contact'>Contact</a>
// //     </ul>
// //   </nav>
// //     )
// //   }

import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
export default function Navigation() {
  const { theme, toggle, dark } = useContext(ThemeContext)
  return (
    <div className='nav'>
      <nav style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
        <ul>
          <a className='active' href='#home'>Home</a>
          <a className='active' href='#news'>News</a>
          <a className='active' href='#about'>About</a>
          <a className='active' href='#contact'>Contact</a>
        </ul>
        <div style={{ position: 'relative' }}>
          <a className='switch-mode' href='#' onClick={toggle}
            style={{
              backgroundColor: theme.backgroundColor,
              color: theme.color,
              outline: 'none'
            }} data-testid="toggle-theme-btn"
          >
            Switch Nav to {!dark ? 'Dark' : 'Light'} mode
          </a>
        </div>
      </nav>
    </div>
  )
}

