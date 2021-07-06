import React from 'react';
import styled from "styled-components";
import { ImHtmlFive } from "@react-icons/all-files/im/ImHtmlFive";
import { IoLogoCss3 } from "@react-icons/all-files/io/IoLogoCss3";
import { SiJavascript } from "@react-icons/all-files/si/SiJavascript";
import { FaSass } from "@react-icons/all-files/fa/FaSass";
import { FaGit } from "@react-icons/all-files/fa/FaGit";
import { FaReact } from "@react-icons/all-files/fa/FaReact";
import { SiRedux } from "@react-icons/all-files/si/SiRedux";
import { SiFirebase } from "@react-icons/all-files/si/SiFirebase";
import { SiGatsby } from "@react-icons/all-files/si/SiGatsby";


const Skills = () => {
    const skills = [<ImHtmlFive />, <IoLogoCss3 />, <SiJavascript />, <FaSass />, <FaGit />, <FaReact />, <SiRedux />, <SiFirebase />, <SiGatsby />];
    return (
        <SkillsBody>
            {skills.map((skill, index) => <li key={index}>{skill}</li>)}
        </SkillsBody>
    );
};


const SkillsBody = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    color: rgb(141, 145, 141);

    li {
        
        svg {
            padding: 5px;
            font-size: 30px;
        }
        &:hover {
            color: rgb(0, 0, 0);
            transition: all .3s ease-in;
        }
    }

    
`;


export default Skills;