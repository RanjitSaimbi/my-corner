import React from "react"
import PropTypes from "prop-types"
import { Link, graphql, StaticQuery } from "gatsby"

import "./BlogRoll.css"

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    console.log(posts)
    return (
      <div className="blog-container">
        {posts &&
          posts.map(({ node: post }) => (
            <div className="blog-box" key={post.id}>
              <div className="w-50">
                <div className="description">BLOG POST</div>
                <article
                  className={`blog-list-item tile is-child box notification ${
                    post.frontmatter.featuredpost ? "is-featured" : ""
                  }`}
                >
                  <header>
                    <p className="post-meta">
                      <Link
                        className="title has-text-primary is-size-4"
                        to={post.frontmatter.path}
                      >
                        {post.frontmatter.title}
                      </Link>
                      <span> &bull; </span>
                      <span className="subtitle is-size-5 is-block">
                        {post.frontmatter.date}
                      </span>
                    </p>
                  </header>
                  <p>
                    {post.excerpt}
                    <br />
                    <br />
                  </p>
                </article>
              </div>
            </div>
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
