import React from "react"
import { Link } from "gatsby"

import styles from "./Layout.module.css"

import Logo from "../../static/lion.png"
import Facebook from "../../static/facebook.svg"
import Gatsby from "../../static/gatsby.svg"
import Twitter from "../../static/twitter.svg"

export default ({ main }) => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.pageMain}>{main}</div>
      <Footer />
    </div>
  )
}

const Header = () => {
  return (
    <header className={styles.pageHeader}>
      <nav>
        {
          <Link to="/">
            {" "}
            <img className={styles.logo} src={Logo} />
          </Link>
        }

        <ul>
          <li>{<Link to="/">Home</Link>}</li>
          <li>{<Link to="/blog">Blog</Link>}</li>
          <li>{<Link to="/about">About</Link>}</li>
        </ul>
      </nav>
    </header>
  )
}

const Footer = () => {
  return (
    <header className={styles.pageFooter}>
      <nav>
        <p>Ranjit's Corner</p>
        <ul>
          <li>
            <img src={Facebook} />
          </li>
          <li>
            <img src={Gatsby} />
          </li>
          <li>
            <img src={Twitter} />
          </li>
        </ul>
      </nav>
    </header>
  )
}
