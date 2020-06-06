import React from "react"
import PropTypes from "prop-types"
import { Link, graphql, StaticQuery } from "gatsby"

import styles from "./BlogRoll.module.css"

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    return (
      <div className={styles.blogContainer}>
        {posts &&
          posts.map(({ node: post }) => (
            <Link className={styles.link} to={post.frontmatter.path}>
              <div className={styles.blogBox} key={post.id}>
                <div className={styles.w50}>
                  <div className={styles.description}>BLOG POST</div>
                  <h2 className={styles.title}>{post.frontmatter.title}</h2>
                  <h3 className={styles.subTitle}>{post.excerpt}</h3>
                  <span className={styles.published}>
                    PUBLISHED: {post.frontmatter.date}
                  </span>
                </div>
                <div className={styles.panel}></div>
              </div>
            </Link>
          ))}
      </div>
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              frontmatter {
                path
                title
                date(formatString: "MMMM DD, YYYY")
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)
