import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import "../components/Layout.css"
import Main from "../components/Main"

export default () => {
  return (
    <div>
      <Layout main={<Main />} />
    </div>
  )
}
