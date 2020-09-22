import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import translate from "../../providers/i18n/translate";
import { useIntl } from 'react-intl';

const ContainerStyle = styled.div`
  display: grid;
  justify-self: center; 
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 0.4fr 0.6fr;
  border-radius: 6px;
  box-shadow: 0 0.9px 20px 0 rgba(0, 0, 0, 0.04);
  background-color: #ffffff;
  height: 55px;
  width: 700px;
  margin-top: 50px;
  padding: 10px 50px;

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
    background-color: rgba(7, 16, 42, 0.5);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 5;
    visibility: hidden;
    pointer-events: none;
    transition: all 0.3s;

    &:target {
      visibility: visible;
      opacity: 1;
      pointer-events: auto;
    }

    .header {
      grid-column: 1;
      font-size: 12px;
      color: #192d4d;
      font-family: Poppins-Semi;
      justify-self: start;
      padding-left: 20px;
    }

    .box {
      grid-row: 1;
      grid-column: 1;
      grid-template-columns: 1fr;
      grid-template-rows: 50px 60px 60px 60px 60px;
      display: grid;
      width: 80vw;
      height: 180px;
      padding-bottom: 10px;
      margin-top: -20px;
      place-items: center;
      place-self: center;
      z-index: 10;
      background: white;
      border-radius: 8px;
      box-shadow: 0 0.9px 20px 0 rgba(0, 0, 0, 0.04);
      background-color: #ffffff;
    }

    .modal-close {
      grid-row: 1;
      grid-column: 1;
      z-index: 8;
      cursor: pointer;
      height: 100vh;
      width: 100vw;
      -webkit-tap-highlight-color: transparent;
    }
  }
`;

const Filter = styled.img`
  grid-column: 2;
  width: 20px;
`;

const Close = styled.img`
  position: absolute;  
  width: 14px;
  right: 50px;
`;

const SelectStyle = styled.select`
  height: 30px;
  width: 300px;
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
  margin-left: 20px;
  padding-left: 10px;
  padding-right: 10px;

  @media screen and (max-width: 750px) {
    width: 77%;
  }  
  
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

    @media screen and (max-width: 750px) {
      font-size: 10px;
    }  
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
  width: 260px;
  text-align: left;
  font-family: Poppins;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;

  @media screen and (max-width: 750px) {
    width: 100%;
  }  

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
  @media screen and (max-width: 750px) {
    width: 90vw;
    justify-items: start;
  }  

  .title {
    font-family: Poppins-Semi;
    font-size: 10px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: normal;
    color: #192d4d;
    margin-left: 20px;
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
  width: 280px;
  margin-top: 10px;
  margin-left: 20px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 6px;
  border: solid 1px rgba(117, 129, 148, 0.12);
  background-color: #ffffff;

  :focus-within {
    border: solid 1px #3f6db4;
  }

  @media screen and (max-width: 750px) {
    width: 68%;
    grid-template-columns: 1fr 30px;
    margin-left: 20px;
    padding-left: 15px;
    padding-right: 10px;
  }  
`;

const BlogSearch = () => {

    const router = useRouter()
    const intl = useIntl()

    return (
    <>
      <FilterMobile>
        <a className="button" href="#open-search">
          <div className="text">{translate('find.filter')}</div>
          <Filter src={"/static/icons/filter_icon.svg"}/>
        </a>
        <div id="open-search" className="modal">
          <div className="box">
            <div className="header">
            {translate('find.filter')}
              <a href="#_" title="Close" className="modal-close">
                <Close src={"/static/icons/close_dark.svg"}/>
              </a>  
            </div>
            <FieldStyle>
              <div className="title">{translate('blog.category')}</div>
              <SelectStyle id="category-mobile" onChange={() => router.push('/blog/'+document.getElementById("category-mobile").value)} >
                  <option selected={router.query.category === "all" ? true : false} value="all">{intl.formatMessage({id:'blog.all'})}</option>
                  <option selected={router.query.category === "tutorials" ? true : false} value="tutorials">{intl.formatMessage({id:'blog.tutorials'})}</option>
                  <option selected={router.query.category === "resources" ? true : false} value="resources">{intl.formatMessage({id:'blog.resources'})}</option>
                  <option selected={router.query.category === "business" ? true : false} value="business">{intl.formatMessage({id:'blog.business'})}</option>
                  <option selected={router.query.category === "lgpd" ? true : false} value="lgpd">Lei Geral de Proteção de Dados (LGPD)</option>
                  <option selected={router.query.category === "gdpr" ? true : false} value="gdpr">General Data Protection Regulation (GDPR)</option>
              </SelectStyle>
            </FieldStyle>
            <FieldStyle>
                <div className="title">{translate('blog.search')}</div>
                <form onSubmit={() => router.push('/blog/all?article='+document.getElementById("article-mobile").value)}>
                <SearchStyle>
                  <InputStyle type="text" id="article-mobile" placeholder={intl.formatMessage({id:'blog.search'})}/>
                  <button type="submit" style={{border:"none", background:"#FFF"}}><span class="ico-mglass"></span></button>
                </SearchStyle>
                </form>
            </FieldStyle>
          </div>
          <a href="#_" title="Close" className="modal-close">
          </a>
        </div>
      </FilterMobile>


      <ContainerStyle>
          <FieldStyle>
              <div className="title">{translate('blog.category')}</div>
              <SelectStyle id="category" onChange={() => router.push('/blog/[category]', '/blog/'+document.getElementById("category").value, {shallow: true})} >
                  <option selected={router.query.category === "all" ? true : false} value="all">{intl.formatMessage({id:'blog.all'})}</option>
                  <option selected={router.query.category === "tutorials" ? true : false} value="tutorials">{intl.formatMessage({id:'blog.tutorials'})}</option>
                  <option selected={router.query.category === "resources" ? true : false} value="resources">{intl.formatMessage({id:'blog.resources'})}</option>
                  <option selected={router.query.category === "business" ? true : false} value="business">{intl.formatMessage({id:'blog.business'})}</option>
                  <option selected={router.query.category === "lgpd" ? true : false} value="lgpd">Lei Geral de Proteção de Dados (LGPD)</option>
                  <option selected={router.query.category === "gdpr" ? true : false} value="gdpr">General Data Protection Regulation (GDPR)</option>
              </SelectStyle>
          </FieldStyle>
          <FieldStyle>
              <div className="title">{translate('blog.search')}</div>
              <form onSubmit={() => router.push('/blog/all?article='+document.getElementById("article").value)}>
                  <SearchStyle>
                      <InputStyle type="text" id="article" placeholder={intl.formatMessage({id:'blog.search'})}/>
                      <button type="submit" style={{border:"none", background:"#FFF"}}><span class="ico-mglass"></span></button>
                  </SearchStyle>
              </form>
          </FieldStyle>
      </ContainerStyle>
    </>
  );
}

export default BlogSearch;