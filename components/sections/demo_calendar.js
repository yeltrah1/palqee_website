import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import translate from "../../providers/i18n/translate";
import { ThemeProvider } from 'styled-components';
import { InlineWidget } from 'react-calendly';

import { palqeeTheme } from '../../providers/theme/colors.ts';

const CalendarStyle = styled.div`
  display: grid;
  align-self: start;
  justify-self: center;
  width: 100vw;
  margin-top: -180px;

  @media screen and (max-width: 750px) {
    margin-top: -130px;
    grid-template-rows: 500px 200px;
  }

  .desktop {
    @media screen and (max-width: 750px) {
      display: none;
    }
  }

  .mobile {
    display: none;
    @media screen and (max-width: 750px) {
      display: grid;
      grid-row: 1;
      height: 400px;
    }
  }
`;

const Plane = styled.img`
  display: grid;
  align-self: end;
  justify-self: center;
  width: 180px;
  margin-top: -120px;
  padding-right: 400px;

  @media screen and (max-width: 750px) {
    grid-row: 2;
    width: 180px;
    margin-top: 0px;
    padding-top: 80px;
    padding-right: 0px;
    align-self: center;
  }
`;

const DemoCalendar = () => {
    
    return (
      <ThemeProvider theme={palqeeTheme}>
        <CalendarStyle>
          <div className="desktop">
            <InlineWidget
                pageSettings={{
                  backgroundColor: 'ffffff',
                  hideEventTypeDetails: true,
                  hideLandingPageDetails: false,
                  primaryColor: '00a2ff',
                  textColor: '4d5055'
                }}
                styles={{
                  height: '680px'
                }}
                url="https://calendly.com/palqee/demo"
            />
          </div>
          <div className="mobile">
            <InlineWidget
                pageSettings={{
                  backgroundColor: 'ffffff',
                  hideEventTypeDetails: true,
                  hideLandingPageDetails: false,
                  primaryColor: '00a2ff',
                  textColor: '4d5055',
                }}
                styles={{
                  justifySelf: 'center',
                  width: '85vw',
                  height: '600px'
                }}
                url="https://calendly.com/palqee/demo"
            />
          </div>
          <Plane src={"/static/patterns/plane.svg"}/>
        </CalendarStyle>
      </ThemeProvider>
    )
  }
  
export { DemoCalendar } ;