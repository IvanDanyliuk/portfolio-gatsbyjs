import * as React from "react";
import { graphql } from "gatsby";
import {getImage, GatsbyImage} from 'gatsby-plugin-image';
import styled from "styled-components";
import Layout from "../components/Layout";
import Skills from '../components/MainPage/Skills';


const AboutPage = ({data}) => {
	const {html, frontmatter} = data.allMarkdownRemark.edges[0].node;
	const image = getImage(frontmatter.photo.childImageSharp.gatsbyImageData);

    return (
        <Layout pageTitle="About Me">
            <AboutBody>
				<AboutDescription>
					<PageTitle>Who am I?</PageTitle>
					<IntroTitle>{frontmatter.title}</IntroTitle>
					<p>{frontmatter.subtitle}</p>
					<div dangerouslySetInnerHTML={{__html: html}}></div>
					<SkillsTitle>My skills</SkillsTitle>
					<Skills />
				</AboutDescription>
				<PortraitContainer>
					<Portrait image={image} alt={'image'}></Portrait>
				</PortraitContainer>
			</AboutBody>
        </Layout>
    );
};


export const data = graphql`
	query About {
		allMarkdownRemark(filter: {
			frontmatter: {
				type: {
					eq: "about"
				}
			}
		}) {
			edges {
				node {
					html
					frontmatter {
						title
						subtitle
						photo {
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


const AboutBody = styled.section`
	position: relative;
	padding: 20px 0;
	width: 100%;
	display: flex;
	background: rgb(255, 255, 255);

	@media (max-width: 768px) {
		flex-direction: column;
	}
`;

const AboutDescription = styled.div`
	padding-right: 30px;
	width: 80%;
	box-sizing: border-box;

	p {
		margin-top: 5px;
	}
	div {
		margin-top: 20px;
		line-height: 26px;
	}

	@media (max-width: 768px) {
		padding-right: 0;
		width: 100%;
	}
`;

const PageTitle = styled.h3`
	margin: 0 0 20px 0;
	font-size: 26px;
`;

const IntroTitle = styled.p`
	font-size: 24px;
`;

const AboutText = styled.p`
	margin-top: 10px;
`;

const PortraitContainer = styled.div`
	position: relative;
	width: 20%;
	display: flex;
	justify-content: center;

	@media (max-width: 768px) {
		margin-top: 20px;
		width: 100%;
	}
`;

const Portrait = styled(GatsbyImage)`
	width: 100%;
	border-radius: 3px;

	@media (max-width: 768px) {
		width: 50%;
	}
`;

const SkillsTitle = styled.h4`
	margin: 20px 0 10px 0;
`;

export default AboutPage;
