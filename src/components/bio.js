/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

//  查询作者信息
// useStaticQuery是一个用于在Gatsby组件中执行GraphQL查询的钩子。
const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
            bio
          }
          social {
            github
          }
        }
      }
    }
  `)

  //  在gatsby-config.js中通过编辑 "siteMetadata" 来设置这些数据
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="bio">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/profile-pic.png"
        width={50}
        height={50}
        quality={95}
        alt="Profile picture"
      />
      {author?.name && (
        <p>
          Written by <strong>{author.name}</strong> {author?.summary || null}
          {` `}
          {author?.bio && (
            <>
              {author.bio}
              <a href={`https://github.com/${social?.github || ``}`}>
                {social?.github}
              </a>
            </>
          )}
        </p>
      )}
    </div>
  )
}

export default Bio
