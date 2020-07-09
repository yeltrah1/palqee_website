import React from 'react';
import styled from 'styled-components';

const ContainerStyle = styled.div`
    display:grid;
    grid-template-columns: 200px;
    grid-template-rows: 75px 100px;
    border-radius: 6px;
    box-shadow: 0 0.8px 24px 0 rgba(206, 206, 206, 0.2);
    background-color: #ffffff;
    height: 190px;
    padding: 20px;
    margin: 0 10px;
`;

const IconStyle = styled.img`
    width: 50px;
    margin: 5px 0;
    justify-self: start;
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

    .title {
        align-self: center;
        margin-bottom: 10px;
        font-family: Poppins-Semi;
        text-align: left;
        font-size: 14px;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.29;
        letter-spacing: normal;
        color: ${props => props.theme.dropdownFontColor};
    
        @font-face {
            font-family: 'Poppins-Semi';
            src: url('static/fonts/Poppins-SemiBold.ttf') format('truetype');
        }
    }
`;

const FeaturesCard = ({name, description, image}) => {

    const icon = "/static/icons/features/"+image+""

    return (
        <ContainerStyle>
            <IconStyle src={icon}/>
            <TextStyle>
                <div className="title">{name}</div>
                {description}
            </TextStyle>
        </ContainerStyle>
    );
}

export { FeaturesCard };