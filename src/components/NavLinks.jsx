import React from 'react'
import { Link } from "react-scroll";

const NavLinks = ({ link, className, onClick }) => {
  return (
    <li className={className}>
      <Link to={link} smooth offset={-115} duration={500} onClick={onClick}>
        {link}
      </Link>
    </li>
  )
}

export default NavLinks