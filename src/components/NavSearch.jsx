import React from 'react'
import '../assets/styles/Homepages.scss';
import { AiOutlineSearch } from 'react-icons/ai';

function NavSearch() {
  return (
    <div className="navbar">
      <input className="navbar__input" type="text" />
      <AiOutlineSearch className="icon__search" />
    </div>
  )
}

export default NavSearch
