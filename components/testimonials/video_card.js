import React, { useState } from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player';

const ContainerStyle = styled.div`
    display:grid;
    grid-template-columns: 1fr;
    grid-template-rows: 0.5fr 0.7fr 0.3fr;
    border-radius: 6px;
    box-shadow: 0 0.8px 24px 0 rgba(206, 206, 206, 0.2);
    background-color: #ffffff;
    height: 250px;
    width: 180px;
    padding: 10px 20px;
    margin: 0 10px;

    .modal {
        position: fixed;
        display: grid;
        grid-template-columns: 1fr 700px 1fr;
        grid-template-rows: 1fr;
        background-color: rgba(7, 16, 42, 0.5);
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 10;
        visibility: hidden;
        pointer-events: none;
        transition: all 0.3s;
    
        &:target {
            visibility: visible;
            opacity: 1;
            pointer-events: auto;
        }
    
        &>div {
            grid-row: 1;
            grid-column: 2;
            display: grid;
            width: 100%;
            height: 100%;
            place-items: center;
        }
    
        .modal-close {
            grid-row: 1;
            grid-column: 3;
            align-self: center;
            padding-bottom: 330px;
            margin-left: -20px;
            cursor: pointer;
        }
    }
`;

const AvatarStyle = styled.img`
    width: 50px;
    margin-top: 10px;
    align-self: center;
`;

const Logo = styled.img`
    width: 50px;
    padding-top: 15px;
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

const CoverStyle = styled.img`
    width: 180px;
    height: 120px;
    border-radius: 6px;
    cursor: pointer;
`;

const VideoCard = () => {

    const [play, setPlay] = useState(false)

    return (
        <ContainerStyle>
            <TitleStyle>
                <AvatarStyle src={"static/photos/marcio.png"}/>
                <div className="person">
                    <div className="name">Marcio Riego Cots</div>
                    <div className="position">COO at Get Global International</div>
                </div>
            </TitleStyle>
            <a href="#open-modal" onClick={() => { setPlay(true) }}>
                <CoverStyle src={"https://res.cloudinary.com/palqee/image/upload/v1596932499/marcio_cover.jpg"}/>
            </a>
            <Logo src={"static/icons/clients/getglobal_logo.png"}/>

            <div id="open-modal" className="modal">
                <div>
                    <ReactPlayer 
                    url='https://res.cloudinary.com/palqee/video/upload/v1596929999/marcio_testimonial.mp4' 
                    controls={true}
                    playing={play}
                    className="react-player"
                    pip={false}
                    config={{ file: { attributes: { controlsList: 'nodownload' } } }} // remove download option
                    onContextMenu={e => e.preventDefault()}  //remove right click
                    />
                </div>
                <a href="#_" title="Close" className="modal-close" onClick={() => { setPlay(false) }}>
                    <img src="static/icons/close_button.svg"/>
                </a>
            </div>
        </ContainerStyle>

    );
}

export { VideoCard };