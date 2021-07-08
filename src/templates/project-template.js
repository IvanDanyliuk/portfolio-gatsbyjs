import React from 'react';
import styled from 'styled-components';
import {Link, graphql} from 'gatsby';
import {getImage, GatsbyImage} from 'gatsby-plugin-image';


const ProjectTemplate = ({data}) => {
    const {markdownRemark} = data;
    const { frontmatter, html } = markdownRemark
    const image = getImage(frontmatter.mobileImg.childImageSharp.gatsbyImageData);
    
    return (
        <TemplateBody>
            <BackLink to={'/projects'}>
                Back to Projects
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

`;

const Content = styled.div`
    padding: 20px 0;
    display: flex;
`;

const PreviewImage = styled(GatsbyImage)`
    margin-right: 30px;
    border: 1px solid rgb(141, 145, 141);
    border-radius: 5px;
`;

const Description = styled.div`
    display: flex;
    flex-direction: column;
`;

const ProjectTitle = styled.h5`
    margin-bottom: 20px;
    font-size: 30px;
`;


export default ProjectTemplate;