import React from 'react';
import styled from 'styled-components';

const ContainerStyle = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    border-radius: 6px;
    box-shadow: 0 0.9px 20px 0 rgba(0, 0, 0, 0.04);
    background-color: #ffffff;
    height: 300px;
    width: 930px;
`;

const Cover = styled.img` 
    height: 300px;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
`;

const InfoStyle = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 25px 55px 150px 0.5fr;
    padding: 20px 25px;
    font-family: Poppins;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    color: #000000;
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
    }
`;

const BlogLargeCard = ({cover, description, date, title, category, link}) => {

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

export default BlogLargeCard;