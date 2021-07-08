exports.createPages = async ({actions, graphql, reporter}) => {
    const {createPage} = actions;
    const template = require.resolve(`./src/templates/project-template.js`);

    const result = await graphql(`
        {
            allMarkdownRemark(
                sort: { order: ASC, fields: [frontmatter___type]}
                limit: 100
            ) {
                edges {
                    node {
                        frontmatter {
                            slug
                            type
                        }
                    }
                }
            }
        }
    `);

    if(result.errors) {
        reporter.panicOnBuild(`File: gatsby-node.js, Message: Error during the grapghql query`)
        return
    }
    result.data.allMarkdownRemark.edges.forEach(({node}) => {
        if(node.frontmatter.type === 'project') {
            createPage({
                path: node.frontmatter.slug,
                component: template,
                context: {
                    slug: node.frontmatter.slug,
                },
            })
        }
    })
}