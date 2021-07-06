import * as React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import Skills from "../components/MainPage/Skills";
import SocialMediaList from "../components/MainPage/SocialMediaList";
import Button from '../components/UI/Button';


const IndexPage = () => {
    
    return (
        <Layout pageTitle="Home Page">
            <MainPage>
                <Introduction>
                      <h1>Hi, I am <span>Ivan</span>!</h1>
                      <h2>I am a frontend developer based in Ukraine</h2>
                      <Skills />
                </Introduction>
                <Cta>
                    <SocialMediaList />
                    <BtnGroup>
                        <Button title={'See my projects'} onClick={() => alert('Yo!')} />
                        <Button title={'Download SV'} onClick={() => alert('Yo!')} />
                    </BtnGroup>
                </Cta>
            </MainPage>
        </Layout>
    );
};


const MainPage = styled.section`
    position: relative;
    width: 100%;
    height: 90vh;
    display: flex;
    box-sizing: border-box;
    overflow: hidden;
`;

const Introduction = styled.div`
    position: relative;
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h1 {
        margin: 0 0 10px 0;
        font-size: 58px;
        font-weight: 400;
        span {
            font-weight: 700;
        }
    }
    h2 {
        margin: 0 0 30px 0;
        font-weight: 400;
        color: rgb(141, 145, 141);
    }

    
`;

const Cta = styled.div`
    position: relative;
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    ::before {
        content: '';
        position: absolute;
        width: 2px;
        height: 80%;
        background: rgb(0, 0, 0);
    }
`;

const BtnGroup = styled.div`
    display: flex;
    flex-direction: column;

    button {
        margin: 10px;
    }
`;


export default IndexPage;
