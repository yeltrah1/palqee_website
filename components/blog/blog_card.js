import React from 'react';
import styled from 'styled-components';

const ContainerStyle = styled.div`
    display: grid;
    border-radius: 6px;
    box-shadow: 0 0.9px 20px 0 rgba(0, 0, 0, 0.04);
    background-color: #ffffff;
    height: 300px;
`;

const PartnerLogo = styled.img` 
    max-height: 50px;
    max-width: 150px;
    padding-left: 30px;
    padding-top: 20px;
`;

const DescriptionStyle = styled.div`
    padding: 0px 30px;
    font-family: Poppins;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    color: #000000;
`;

const TagsStyle = styled.div`
    padding: 0px 30px;
    font-family: Poppins;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: #758194;

    .tag {
        color: #000000;
        font-family: Poppins-Semi;
    }
`;

const LinkStyle = styled.div`
    @font-face {
        font-family: 'Poppins-Semi';
        src: url('../../../static/fonts/Poppins-SemiBold.ttf') format('truetype');
    }

    a {
    padding: 0px 30px;
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

const BlogCard = ({logo, description, service, industry, location, website}) => {

    return (
        <ContainerStyle>
            <PartnerLogo src={"../../../static/images/blog/"+logo}/>
            <DescriptionStyle>{description}</DescriptionStyle>
            <TagsStyle>
                <a className="tag">Services: </a> {service} <br/>
                <a className="tag">Industries: </a> {industry} <br/>
                <a className="tag">Location: </a> {location}
            </TagsStyle>
            <LinkStyle><a href={website} target="_blank"><u>Visit Website</u></a></LinkStyle>
        </ContainerStyle>
    );
}

export default BlogCard;