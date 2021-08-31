import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/Layout';
import SocialMediaList from '../components/MainPage/SocialMediaList';
import ContactForm from '../components/Form/ContactForm';


const Contact = ({data}) => {
    const {frontmatter} = data.allMarkdownRemark.edges[0].node;

    return (
        <Layout>
            <ContactBody>
                <MainContactInfo>
                    <h5>{frontmatter.title}</h5>
                    <p>{frontmatter.subtitle}</p>
                    <h6>{frontmatter.text}</h6>
                    <SocialMediaList />
                </MainContactInfo>
                <ContactFormContainer>
                    <h6>or send me a message</h6>
                    <ContactForm />
                </ContactFormContainer>
            </ContactBody>
        </Layout>
    );
};

export const contactData = graphql`
    query ContactQuery {
        allMarkdownRemark(filter: {
            frontmatter: {
                type: {
                    eq: "contact"
                }
            }
        }) {
            edges {
                node {
                    frontmatter {
                        title
                        subtitle
                        text
                    }
                }
            }
        }
    }
`;


const ContactBody = styled.section`
    position: relative;
    padding: 20px 0;
    width: 100%;
    min-height: 90vh;
    display: flex;
    box-sizing: border-box;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const MainContactInfo = styled.div`
    position: relative;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    h5 {
        margin-bottom: 10px;
        font-size: 36px;
    }
    p {
        font-size: 26px;
    }
    h6 {
        margin: 36px 0 20px 0;
        font-size: 20px;
    }

    @media (max-width: 768px) {
        width: 100%;
    }
`;

const ContactFormContainer = styled.div`
    position: relative;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h6 {
        margin: 10px 0;
        font-size: 20px;
    }

    @media (max-width: 768px) {
        width: 100%;

        h6 {
            margin: 26px 0;
            text-align: center;
        }
    }
`;


export default Contact;