import React from 'react';
import styled from 'styled-components';

const ContainerStyle = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 195px 1fr;
    border-radius: 6px;
    box-shadow: 0 0.9px 20px 0 rgba(0, 0, 0, 0.04);
    background-color: #ffffff;
    height: 390px;
    width: 400px;

    @media screen and (max-width: 750px) {
        width: 300px;
        grid-template-rows: 160px 1fr;
    }
`;

const Cover = styled.img` 
    width: 400px;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    user-drag: none; 
    user-select: none;

    @media screen and (max-width: 750px) {
        width: 300px;
    }
`;

const InfoStyle = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 25px 55px 85px 20px;
    padding: 0px 15px;
    font-family: Poppins;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    color: #000000;

    @media screen and (max-width: 750px) {
        grid-template-rows: 28px 70px 92px 20px;
    }
`;

const DateStyle = styled.div`
    display: grid;
    grid-template-columns: 1fr 190px;
    grid-template-rows: 1fr;
    font-family: Poppins;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    color: #758194;

    .container {
        display: flex;
        column-gap: 5px;
        justify-content: flex-end;
    }

    .reg-tag {
        display: grid;
        grid-row: 1;
        grid-column: 2;
        font-family: Poppins;
        font-size: 14px;
        color: #40b894;
        place-items: center;
        background: #e6faf4;
        border-radius: 6px;
        width: 60px;
        height: 20px;
    }

    .business-tag {
        display: grid;
        grid-row: 1;
        grid-column: 2;
        font-family: Poppins;
        font-size: 14px;
        color: #3f6db4;
        place-items: center;
        background: #f2f8fd;
        border-radius: 6px;
        width: 80px;
        height: 20px;
    }

    .innovation-tag {
        display: grid;
        grid-row: 1;
        grid-column: 2;
        font-family: Poppins;
        font-size: 14px;
        color: #a1a100;
        place-items: center;
        background: #ffffcc;
        border-radius: 6px;
        width: 90px;
        height: 20px;
    }

    .tutorials-tag {
        display: grid;
        grid-row: 1;
        grid-column: 2;
        font-family: Poppins;
        font-size: 14px;
        color: #3f6db4;
        place-items: center;
        background: #f2f8fd;
        border-radius: 6px;
        width: 60px;
        height: 20px;
    }

    .resources-tag {
        display: grid;
        grid-row: 1;
        grid-column: 2;
        font-family: Poppins;
        font-size: 14px;
        color: #ff6969;
        place-items: center;
        background: #ffe6e6;
        border-radius: 6px;
        width: 135px;
        height: 20px;
    }
`;

const TitleStyle = styled.div`
    @font-face {
        font-family: 'Poppins-Semi';
        src: url('../../static/fonts/Poppins-SemiBold.ttf') format('truetype');
    }

    display: grid;
    align-self: center;
    font-family: Poppins-Semi;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    color: #192d4d;

    @media screen and (max-width: 750px) {
        font-size: 14px;
    }
`;

const DescriptionStyle = styled.div`
    display: grid;
    font-family: Poppins;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    color: #000000;
`;

const LinkStyle = styled.div`
    @font-face {
        font-family: 'Poppins-Semi';
        src: url('../../static/fonts/Poppins-SemiBold.ttf') format('truetype');
    }

    a {
    padding-bottom: 20px;
    font-family: Poppins-Semi;
    font-size: 14px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.54;
    letter-spacing: normal;
    color: ${props => props.theme.linkColor};
    -webkit-tap-highlight-color: transparent;
    }
`;

const BlogSmallCard = ({cover, description, date, title, category, category2, link}) => {

    return (
        <ContainerStyle>
            <Cover src={"../../../static/images/blog/"+cover}/>
            <InfoStyle>
                <DateStyle>
                    {date}
                    <div className="container">
                        <a className={
                            category === "GDPR" ? "reg-tag" :
                            category === "LGPD" ? "reg-tag" :
                            category === "Business" ? "business-tag" :
                            category === "Innovation" ? "innovation-tag" :
                            category === "Tutorials" ? "tutorials-tag" :
                            category === "Resources & Tips" ? "resources-tag" : ""}
                        >{category}</a> 
                        <a className={
                            category2 === "GDPR" ? "reg-tag" :
                            category2 === "LGPD" ? "reg-tag" :
                            category2 === "Business" ? "business-tag" :
                            category2 === "Innovation" ? "innovation-tag" :
                            category2 === "Tutorials" ? "tutorials-tag" :
                            category2 === "Resources & Tips" ? "resources-tag" : ""}
                        >{category2}</a> 
                    </div>
                </DateStyle>
                <TitleStyle>{title}</TitleStyle>
                <DescriptionStyle>{description}</DescriptionStyle>
                <LinkStyle><a href={link} target="_blank"><u>Read Article</u></a></LinkStyle>
            </InfoStyle>
        </ContainerStyle>
    );
}

export default BlogSmallCard;