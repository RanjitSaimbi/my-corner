import React from "react"

import BlogRoll from "../components/BlogRoll"
import Layout from "../components/Layout"

import styles from "../components/Main.module.css"

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout
        main={
          <React.Fragment>
            <div className={styles.mainWrapper}>
              <h1 className={styles.mainHeader}>Posts</h1>
              <section>
                <div className={styles.mainBody}>
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
