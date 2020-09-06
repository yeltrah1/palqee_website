import React from 'react';
import styled from 'styled-components';

const ContainerStyle = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    border-radius: 6px;
    box-shadow: 0 0.9px 20px 0 rgba(0, 0, 0, 0.04);
    background-color: #ffffff;
    height: 430px;

    @media screen and (max-width: 750px) {
        width: 90vw;
        height: auto;
        grid-template-rows: auto 1fr;
    }
`;

const Cover = styled.img` 
    height: 200px;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;

    @media screen and (max-width: 750px) {
        width: 90vw;
        height: auto;
    }
`;

const InfoStyle = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 25px 55px 90px 0.5fr;
    padding: 0px 25px;
    font-family: Poppins;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    color: #000000;

    @media screen and (max-width: 750px) {
        padding: 10px 20px;
        grid-row-gap: 0.5em;
        grid-template-rows: auto auto auto auto;
    }
`;

const DateStyle = styled.div`
    display: grid;
    grid-template-columns: 1fr 100px;
    grid-template-rows: 1fr;
    font-family: Poppins;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    color: #758194;

    .reg-tag {
        display: grid;
        font-family: Poppins;
        font-size: 14px;
        color: #3f6db4;
        justify-self: end;
        place-items: center;
        background: #f2f8fd;
        border-radius: 6px;
        width: 60px;
        height: 20px;
    }

    .business-tag {
        display: grid;
        font-family: Poppins;
        font-size: 14px;
        color: #3f6db4;
        justify-self: end;
        place-items: center;
        background: #f2f8fd;
        border-radius: 6px;
        width: 80px;
        height: 20px;
    }

    .tutorials-tag {
        display: grid;
        font-family: Poppins;
        font-size: 14px;
        color: #3f6db4;
        justify-self: end;
        place-items: center;
        background: #f2f8fd;
        border-radius: 6px;
        width: 60px;
        height: 20px;
    }

    .resources-tag {
        display: grid;
        font-family: Poppins;
        font-size: 14px;
        color: #3f6db4;
        justify-self: end;
        place-items: center;
        background: #f2f8fd;
        border-radius: 6px;
        width: 60px;
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

    @media screen and (max-width: 750px) {
        font-size: 11px;
        align-self: center;
    }
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

        @media screen and (max-width: 750px) {
            font-size: 12px;
        }
    }
`;

const BlogCard = ({cover, description, date, title, category, link}) => {

    return (
        <ContainerStyle>
            <Cover src={"../../../static/images/blog/"+cover}/>
            <InfoStyle>
                <DateStyle>
                    {date}
                    <a className={
                        category === "GDPR" ? "reg-tag" :
                        category === "LGPD" ? "reg-tag" :
                        category === "Business" ? "business-tag" :
                        category === "Tutorials" ? "tutorials-tag" :
                        category === "Resources" ? "resources-tag" : "reg-tag"}
                    >{category}</a> 
                </DateStyle>
                <TitleStyle>{title}</TitleStyle>
                <DescriptionStyle>{description}</DescriptionStyle>
                <LinkStyle><a href={link} target="_blank"><u>Read Article</u></a></LinkStyle>
            </InfoStyle>
        </ContainerStyle>
    );
}

export default BlogCard;