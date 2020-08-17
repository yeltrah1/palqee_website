import React from 'react';
import styled from 'styled-components';
import Linkedin from '../../public/static/icons/linkedin.png';

const Wrapper = styled.div`
    display: grid;
    border-radius: 6px;
    background-size: 315px 400px;
`;

const TextContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 0.2fr 0.2fr 0.6fr;
    border-radius: 6px;
    background: white;
    margin: 15px 15px;
    align-self: end;

    a {
        width: 25%;
    }
`;

const NameStyle = styled.div`

    @font-face {
        font-family: 'Poppins-Semi';
        src: url('static/fonts/Poppins-SemiBold.ttf') format('truetype');
    }
    font-family: Poppins-Semi;
    font-weight: bold;
    font-size: 16px;
    cursor: default;
    padding-right: 20px;
    padding-left: 20px;
    padding-top: 15px;
    color: ${props => props.theme.fontColor};
    text-align: left;
`;

const RoleStyle = styled.div`
    font-family: Poppins;
    font-size: 14px;
    color: #758194;
    cursor: default;
    padding-left: 20px;
    padding-right: 20px;
`;

const LinkedinImage = styled.img`
    position: absolute;
    height: 30px;
    padding-left: 20px;
    padding-top: 5px;
`;

const MemberCards = ({name, role, type, image, linkedin}) => {

    const photo = "url("+image+")"

    return (
        <Wrapper style={{backgroundImage:photo}}>
            <div></div>
            <TextContainer style={{height: type==="team"? "110px": "130px"}}>
                <NameStyle>{name}</NameStyle>
                <RoleStyle>{role}</RoleStyle>
                <a href={linkedin} target="_blank">
                    <LinkedinImage src={Linkedin}/>
                </a>
            </TextContainer>
        </Wrapper>
    );
}

export { MemberCards };