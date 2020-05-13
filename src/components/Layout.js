import React from "react"
import { Link } from "gatsby"

import "./Layout.css"
import logo from "../../static/lion.png"

export default ({ main }) => {
  return (
    <div className="wrapper">
      <Header />
      <div className="page-main">{main}</div>
      <Footer />
    </div>
  )
}

const Header = () => {
  return (
    <header className="page-header">
      <nav>
        <img className="logo" src={logo} />
        <ul>
          <li>Home</li>
          <li>{<Link to="/blog">Blog</Link>}</li>
          <li>About</li>
        </ul>
      </nav>
    </header>
  )
}

const Footer = () => {
  return <h1 className="page-footer">FOOTER</h1>
}
