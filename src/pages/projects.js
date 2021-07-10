import * as React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import {GatsbyImage, getImage} from 'gatsby-plugin-image';
import Layout from "../components/Layout";
import LinkButton from "../components/UI/LinkButton";


const Projects = ({data}) => {
    return (
        <Layout pageTitle="My Projects">
            <PageTitle>My projects</PageTitle>
            <ProjectsList>
                {data.allMarkdownRemark.edges.map((project, index) => {
					const image = getImage(project.node.frontmatter.postImg.childImageSharp.gatsbyImageData);

					return (
						<ProjectItem key={index}>
							<ProjectImg
								image={image}
								alt={'Image'}
							></ProjectImg>
							<ProjectDescription>
								<h3>{project.node.frontmatter.title}</h3>
								<p>{project.node.frontmatter.stack}</p>
							</ProjectDescription>
							<Links>
								<LinkButton href={project.node.frontmatter.deployLink} title={'Watch live'} target={'_blank'} />
								<LinkButton href={project.node.frontmatter.githubLink} title={'See the code'} target={'_blank'} />
								<LinkButton href={project.node.frontmatter.slug} title={'More...'} target={'_self'} />
							</Links>
						</ProjectItem>
					)
				})}
            </ProjectsList>
        </Layout>
    );
};

export const data = graphql`
    query MyQuery {
        allMarkdownRemark(
            filter: { frontmatter: { type: { eq: "project" } } }
        ) {
            edges {
                node {
                    id
                    frontmatter {
                        title
                        slug
						stack
                        githubLink
                        deployLink
                        postImg {
                            childImageSharp {
								gatsbyImageData
							}
                        }
                    }
                }
            }
        }
    }
`;


const PageTitle = styled.h3`
	margin: 10px 0 20px 0;
	font-size: 26px;
`;

const ProjectsList = styled.ul`
	position: relative;
	width: 100%;
	display: flex;
	flex-wrap: wrap;
`;

const ProjectItem = styled.li`
	position: relative;
	margin: 0 10px 0 0;
	width: 30%;
	border: 1px solid rgb(233, 236, 239);
	border-radius: 3px;
	background: rgb(233, 236, 239);
	overflow: hidden;

	&:last-child {
		margin-right: 0;
	}

	@media (max-width: 768px) {
		margin: 0 0 26px 0;
		width: 100%;
	}
`;

const ProjectImg = styled(GatsbyImage)`
	
`;

const ProjectDescription = styled.div`
	padding: 10px;

	h3 {
		margin-bottom: 10px;
	}
	p {
		font-size: 12px;
		color: rgb(108, 117, 125);
	}
`;

const Links = styled.ul`
	position: relative;
	padding: 10px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	box-sizing: border-box;
`;


export default Projects;
