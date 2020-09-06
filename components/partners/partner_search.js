import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

const ContainerStyle = styled.div`
  display: grid;
  justify-self: center; 
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 0.4fr 0.6fr;
  border-radius: 6px;
  box-shadow: 0 0.9px 20px 0 rgba(0, 0, 0, 0.04);
  background-color: #ffffff;
  height: 50px;
  width: 900px;
  margin-top: 50px;
  padding: 20px;

  @media screen and (max-width: 750px) {
    display: none;
  }
`;

const FilterMobile = styled.div`
  display: none;
  margin-top: -10px;
  grid-template-columns: 1fr 80px;
  grid-template-rows: 1fr;
  height: 30px;
  width: 90vw;
  place-items: center;

  @media screen and (max-width: 750px) {
    display: grid;
  }

  @font-face {
    font-family: 'Poppins-Semi';
    src: url('../../../static/fonts/Poppins-SemiBold.ttf') format('truetype');
  }

  .button {
    display: grid;
    grid-column: 2;
    grid-template-columns: 45px 35px;
    grid-template-rows: 1fr;
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;

    .text {
      grid-column: 1;
      font-size: 14px;
      color: #192d4d;
      font-family: Poppins-Semi;
    }
  }

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

const Filter = styled.img`
  grid-column: 2;
  width: 20px;
`;

const SelectStyle = styled.select`
  height: 30px;
  width: 200px;
  background-color: #ffffff;
  border-radius: 6px;
  border: solid 1px rgba(117, 129, 148, 0.12);
  text-align: left;
  font-family: Poppins;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  margin-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  
  :focus {
    outline: none;
  }

  :focus-within {
    border: solid 1px #3f6db4;
  }

  option {
    font-family: Poppins;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.71;
    letter-spacing: normal;
    color: #758194;
  }

  option:disabled {
    color: rgba(117, 129, 148, 0.5);
  }

  &:invalid {
    color: rgba(117, 129, 148, 0.5);
  }
`;

const InputStyle = styled.input`
    background-color: transparent;
    border: 0;
    width: 180px;
    text-align: left;
    font-family: Poppins;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.71;

    :focus {
    outline: none;
    }

    ::placeholder {
    font-family: Poppins;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.71;
    color: rgba(117, 129, 148, 0.5);
    }
`;

const FieldStyle = styled.div`
    .title {
        font-family: Poppins-Semi;
        font-size: 10px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 1;
        letter-spacing: normal;
        color: #192d4d;
    }

    .ico-mglass {
        position: relative;
        display: inline-block;
        border-radius: 30px;
        height: 6px;
        width: 6px;
        border: 2px solid #758194;
        cursor: pointer;
        
        &:after {
          content: "";
          height: 2px;
          width: 6px;
          background: #888;
          position:absolute;
          top:7px;
          left:5px;
          -webkit-transform: rotate(45deg);
           -moz-transform: rotate(45deg);
            -ms-transform: rotate(45deg);
             -o-transform: rotate(45deg);
        }
        
      }

`;

const SearchStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.5fr;
  grid-template-rows: 1fr;
  align-items: center;
  justify-items: end;
  height: 29px;
  width: 200px;
  margin-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 6px;
  border: solid 1px rgba(117, 129, 148, 0.12);
  background-color: #ffffff;

  :focus-within {
    border: solid 1px #3f6db4;
  }
`;

const PartnerSearch = () => {

    const router = useRouter()

    return (
        <>
          <FilterMobile>
            <a className="button" href="#open-search">
              <div className="text">Filter</div>
              <Filter src={"/static/icons/filter_icon.svg"}/>
            </a>
            <div id="open-search" className="modal">
              <div>
                  CONTENT
              </div>
              <a href="#_" title="Close" className="modal-close">
              </a>
            </div>
          </FilterMobile>

          <ContainerStyle>
              <FieldStyle>
                  <div className="title">By Service</div>
                  <SelectStyle id="service" onChange={() => router.push('/accredited/[service]/[industry]/[country]', '/accredited/'+document.getElementById("service").value+'/'+document.getElementById("industry").value+'/'+document.getElementById("country").value, {shallow: true})} >
                      <option selected={router.query.service === "all-services" ? true : false} value="all-services">All Services</option>
                      <option selected={router.query.service === "consulting" && !router.query.partner ? true : false} value="consulting">Compliance Consulting</option>
                      <option selected={router.query.service === "implementation" && !router.query.partner ? true : false} value="implementation">Palqee Implementation</option>
                      <option selected={router.query.service === "training" && !router.query.partner ? true : false} value="training">Workforce Training</option>
                  </SelectStyle>
              </FieldStyle>
              <FieldStyle>
                  <div className="title">By Industry</div>
                  <SelectStyle id="industry" onChange={() => router.push('/accredited/[service]/[industry]/[country]', '/accredited/'+document.getElementById("service").value+'/'+document.getElementById("industry").value+'/'+document.getElementById("country").value, {shallow: true})}>
                      <option selected={router.query.industry === "all-industries" ? true : false} value="all-industries">All Industries</option>
                      <option selected={router.query.industry === "finance" && !router.query.partner ? true : false} value="finance">Finance</option>
                      <option selected={router.query.industry === "automotive" && !router.query.partner ? true : false} value="automotive">Automotive</option>
                      <option selected={router.query.industry === "ecommerce" && !router.query.partner ? true : false} value="ecommerce">Ecommerce</option>
                  </SelectStyle>
              </FieldStyle>
              <FieldStyle>
                  <div className="title">By Country</div>
                  <SelectStyle id="country" onChange={() => router.push('/accredited/[service]/[industry]/[country]', '/accredited/'+document.getElementById("service").value+'/'+document.getElementById("industry").value+'/'+document.getElementById("country").value, {shallow: true})}>
                      <option selected={router.query.country === "global" ? true : false} value="global">All Countries</option>
                      <option selected={router.query.country === "brazil" && !router.query.partner ? true : false} value="brazil">Brazil</option>
                      <option selected={router.query.country === "usa" && !router.query.partner ? true : false} value="usa">United States</option>
                      <option selected={router.query.country === "portugal" && !router.query.partner ? true : false} value="portugal">Portugal</option>
                  </SelectStyle>
              </FieldStyle>
              <FieldStyle>
                  <div className="title">Find a Partner</div>
                  <form onSubmit={() => router.push({ 
                          pathname: '/accredited/[service]/[industry]/[country]',
                          query: { partner: query }
                          })}>
                      <SearchStyle>
                          <InputStyle type="text" name="partner" placeholder="Search"/>
                          <button type="submit" style={{border:"none", background:"#FFF"}}><span class="ico-mglass"></span></button>
                      </SearchStyle>
                  </form>
              </FieldStyle>
          </ContainerStyle>
        </>
    );
}

export default PartnerSearch;