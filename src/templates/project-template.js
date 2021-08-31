import React from 'react';
import styled from 'styled-components';
import { Link, graphql } from 'gatsby';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import { FiArrowLeft } from "react-icons/fi";


const ProjectTemplate = ({data}) => {
    const {markdownRemark} = data;
    const { frontmatter, html } = markdownRemark
    const image = getImage(frontmatter.mobileImg.childImageSharp.gatsbyImageData);
    
    return (
        <TemplateBody>
            <BackLink to={'/projects'}>
                <FiArrowLeft /><span>Back to Projects</span>
            </BackLink>
            <Content>
                <PreviewImage image={image} alt="image" />
                <Description>
                    <ProjectTitle>{frontmatter.title}</ProjectTitle>
                    <div dangerouslySetInnerHTML={{__html: html}}></div>
                </Description>
            </Content>
        </TemplateBody>
    );
};


export const data = graphql`
    query($slug: String!) {
        markdownRemark(frontmatter: {slug: {eq: $slug}}) {
            html
            frontmatter {
                slug
                title
                deployLink
                githubLink
                mobileImg {
                    childImageSharp {
                        gatsbyImageData
                    }
                }
            }
        }
    }
`;


const TemplateBody = styled.div`
    position: relative;
    padding: 30px 10%;
    width: 100%;
    display: flex;
    flex-direction: column;
    font-family: 'Montserrat';
    box-sizing: border-box;
    overflow: hidden;

`;

const BackLink = styled(Link)`
    display: flex;
    align-items: center;
    font-size: 18px;
    color: rgb(0, 0, 0);
    svg {
        margin-right: 6px;
        font-size: 20px;
    }
`;

const Content = styled.div`
    padding: 20px 0;
    display: flex;
    box-sizing: border-box;

    @media (max-width: 768px) {
        flex-direction: column-reverse;
    }
`;

const PreviewImage = styled(GatsbyImage)`
    width: 20%;
    margin-right: 30px;
    border: 1px solid rgb(141, 145, 141);
    border-radius: 5px;
    box-sizing: border-box;

    @media (max-width: 768px) {
        margin-top: 20px;
        width: 100%;
    }
`;

const Description = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    p {
        line-height: 26px;
    }
    div {
        line-height: 26px;
    }

    @media (max-width: 768px) {
        width: 100%;
    }
`;

const ProjectTitle = styled.h5`
    margin-bottom: 20px;
    font-size: 30px;
`;


export default ProjectTemplate;