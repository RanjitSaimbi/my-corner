import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import styles from "./blog.module.css"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout
      main={
        <div className={styles.blogPostContainer}>
          <div className={styles.blogPostTitle}>
            <h1>{frontmatter.title}</h1>
            <h2>{frontmatter.date}</h2>
          </div>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      }
    />
  )
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
