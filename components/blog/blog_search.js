import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

const ContainerStyle = styled.div`
    display: grid;
    justify-self: center; 
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 0.4fr 0.6fr;
    border-radius: 6px;
    box-shadow: 0 0.9px 20px 0 rgba(0, 0, 0, 0.04);
    background-color: #ffffff;
    height: 50px;
    width: 700px;
    margin-top: 50px;
    padding: 20px 50px;
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
    width: 260px;
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
`;

const BlogSearch = () => {

    const router = useRouter()

    return (
        <ContainerStyle>
            <FieldStyle>
                <div className="title">By Category</div>
                <SelectStyle id="category" onChange={() => router.push('/blog/[category]', '/blog/'+document.getElementById("category").value, {shallow: true})} >
                    <option selected={router.query.category === "all" ? true : false} value="all">All Articles</option>
                    <option selected={router.query.category === "tutorials" ? true : false} value="tutorials">Tutorials</option>
                    <option selected={router.query.category === "resources" ? true : false} value="resources">Resources & Tips</option>
                    <option selected={router.query.category === "business" ? true : false} value="business">Business</option>
                    <option selected={router.query.category === "lgpd" ? true : false} value="lgpd">Lei Geral de Proteção de Dados (LGPD)</option>
                    <option selected={router.query.category === "gdpr" ? true : false} value="gdpr">General Data Protection Regulation (GDPR)</option>
                </SelectStyle>
            </FieldStyle>
            <FieldStyle>
                <div className="title">Search</div>
                <form onSubmit={() => router.push({ 
                        pathname: '/blog/[category]',
                        query: { article: query }
                        })}>
                    <SearchStyle>
                        <InputStyle type="text" name="article" placeholder="Search"/>
                        <button type="submit" style={{border:"none", background:"#FFF"}}><span class="ico-mglass"></span></button>
                    </SearchStyle>
                </form>
            </FieldStyle>
        </ContainerStyle>
    );
}

export default BlogSearch;