import React from 'react'
import Logo from './Logo'
import Menu from './Menu'
import Search from './Search'
import HeaderIcons from './HeaderIcons'

const Navigation = (props) => {
  return (
    <nav>
        <Menu/>
        <Logo/>
        <Search/>
        <HeaderIcons/>
    </nav>
  )
}

export default Navigation