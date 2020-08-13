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
`;

const DemoCalendar = () => {
    
    return (
      <ThemeProvider theme={palqeeTheme}>
        <CalendarStyle>
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
        </CalendarStyle>
      </ThemeProvider>
    )
  }
  
export { DemoCalendar } ;