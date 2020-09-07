import React from 'react';
import styled from 'styled-components';

import Avatar from '../../public/static/photos/avatar.png';

const ContainerStyle = styled.div`
    display:grid;
    grid-template-columns: 1fr;
    grid-template-rows: 0.8fr 1fr 0.3fr;
    border-radius: 6px;
    box-shadow: 0 0.8px 24px 0 rgba(206, 206, 206, 0.2);
    background-color: #ffffff;
    height: 230px;
    width: 180px;
    padding: 20px;
    margin: 0 10px;
    cursor: grab;
`;

const AvatarStyle = styled.img`
    width: 50px;
    margin-top: 10px;
    align-self: center;
`;

const Logo = styled.img`
    width: 40px;
`;

const TitleStyle = styled.div`
    display: grid;
    grid-template-columns: 0.3fr 0.7fr;
    grid-template-rows: 1fr;
    align-self: center;
    height: 50px;
    margin-bottom: 30px;

    @font-face {
        font-family: 'Poppins-Semi';
        src: url('static/fonts/Poppins-SemiBold.ttf') format('truetype');
    }
    
    .person {
        display:grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
        text-align: left;
        padding-left: 10px;
    }

    .person .name {
        font-family: Poppins-Semi;
        font-size: 12px;
        opacity: 0.9;
        font-stretch: normal;
        font-style: normal;
        color: #192d4d;
        align-self: end;
    }

    .person .position {
        align-self: start;
        font-family: Poppins;
        font-size: 10px;
        opacity: 0.9;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        color: #758194;
    }
`;

const TextStyle = styled.div`
    font-family: Poppins;
    text-align: left;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.71;
    letter-spacing: normal;
    color: #758194;
`;

const TextCard = () => {

    return (
        <ContainerStyle>
            <TitleStyle>
                <AvatarStyle src={Avatar}/>
                <div className="person">
                    <div className="name">Marcio Riego Cots</div>
                    <div className="position">COO at Get Global International</div>
                </div>
            </TitleStyle>
            <TextStyle>
                "Palqee is the best privacy management software. Great tool to suceed with privacy.  I highly recommend it!"
            </TextStyle>
            <Logo src={"static/icons/clients/getglobal_logo.png"}/>
        </ContainerStyle>
    );
}

export { TextCard };