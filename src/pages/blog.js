import React from "react"

import BlogRoll from "../components/BlogRoll"
import Layout from "../components/Layout"

import "../components/Main.css"

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout
        main={
          <React.Fragment>
            <div className="main-wrapper">
              <h1 className="main-header">Posts</h1>
              <section>
                <div className="main-body">
                  <p>
                    Yak Collective projects are collaborations and explorations
                    from the community. Latest projects:
                  </p>
                  <BlogRoll />
                </div>
              </section>
            </div>
          </React.Fragment>
        }
      />
    )
  }
}
