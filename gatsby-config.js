/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {

  plugins: [
    {
      source: `gatsby-source-filesystem`,
      options: {
        name: `pages`, 
        path: `${__dirname}/src/pages`

      },
      
    },
    {
      source: `gatsby-source-filesystem`,
      options: {
        name: `posts`, 
        path: `${__dirname}/src/posts`

      },
      
    },
    {
      source: `gatsby-source-filesystem`,
      options: {
        name: `images`, 
        path: `${__dirname}/src/images`

      },
      
    },
    `gatsby-plugin-sharp`, 
    `gatsby-transformer-sharp`,


    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extension:[`.md`, `.mdx`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`, 
            options: {
              maxWidth: 1200, 
              
            }
          }
        ]
      },
    },

  ],
}
