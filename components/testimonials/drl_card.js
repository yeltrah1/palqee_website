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
    cursor: grab;

    .modal {
        position: fixed;
        display: grid;
        grid-template-columns: 15vw 70vw 15vw;
        grid-template-rows: 1fr 80vw 1fr;
        background-color: rgba(7, 16, 42, 0.5);
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 10;
        visibility: hidden;
        pointer-events: none;
        transition: all 0.3s;

        @media screen and (max-width: 750px) {
            grid-template-columns: 3vw 94vw 3vw;
            grid-template-rows: 30vh 40vh 30vh;
        }

        &:target {
            visibility: visible;
            opacity: 1;
            pointer-events: auto;
        }
    
        &>div {
            grid-row: 2;
            grid-column: 2;
            display: grid;
            width: 100%;
            height: 12vh;
            margin-top: 10vh;
            place-items: center;
        }
    
        .modal-close {
            grid-row-start: 1;
            grid-row-end: 4;
            grid-column-start: 1;
            grid-column-end: 4;
            cursor: pointer;
            height: 100%;
            width: 100%;
            -webkit-tap-highlight-color: transparent;
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
    user-drag: none; 
    user-select: none;
`;

const DrlCard = () => {

    const [play, setPlay] = useState(false)

    return (
        <ContainerStyle>
            <TitleStyle>
                <AvatarStyle src={"static/photos/avatar.png"}/>
                <div className="person">
                    <div className="name">Alex Palamarczuk</div>
                    <div className="position">CEO at Digital Roots Lab</div>
                </div>
            </TitleStyle>
            <a href="#open-drl" onClick={() => { setPlay(true) }}>
                <CoverStyle src={"static/images/video_placeholder.jpg"}/>
            </a>
            <Logo src={"static/icons/clients/drl_logo.png"}/>

            <div id="open-drl" className="modal">
                <div>
                    <ReactPlayer 
                    url='https://res.cloudinary.com/palqee/video/upload/v1596929999/marcio_testimonial.mp4' 
                    controls={true}
                    playing={play}
                    className="player"
                    width='100%'
                    height='100%'
                    pip={false}
                    config={{ file: { attributes: { controlsList: 'nodownload' } } }} // remove download option
                    onContextMenu={e => e.preventDefault()}  //remove right click
                    />
                </div>
                <a href="#_" title="Close" className="modal-close" onClick={() => { setPlay(false) }}>
                </a>
            </div>
        </ContainerStyle>

    );
}

export { DrlCard };