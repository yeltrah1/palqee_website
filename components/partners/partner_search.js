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
    width: 860px;
    margin-top: 50px;
    padding: 20px;
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
`;

const FieldStyle = styled.div`
    .title {
        font-family: Poppins;
        font-size: 10px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 1;
        letter-spacing: normal;
        color: #192d4d;
    }

`;

const PartnerSearch = () => {

    const router = useRouter()

    return (
        <ContainerStyle>
            <FieldStyle>
                <div className="title">By Service</div>
                <SelectStyle id="service" onChange={() => router.push('/accredited/[service]/[industry]/[country]', '/accredited/'+document.getElementById("service").value+'/'+document.getElementById("industry").value+'/'+document.getElementById("country").value, {shallow: true})} >
                    <option selected={router.query.service === "all-services" ? true : false} value="all-services">All Services</option>
                    <option selected={router.query.service === "consulting" ? true : false} value="consulting">Compliance Consulting</option>
                    <option selected={router.query.service === "implementation" ? true : false} value="implementation">Palqee Implementation</option>
                    <option selected={router.query.service === "training" ? true : false} value="training">Workforce Training</option>
                </SelectStyle>
            </FieldStyle>
            <FieldStyle>
                <div className="title">By Industry</div>
                <SelectStyle id="industry" onChange={() => router.push('/accredited/[service]/[industry]/[country]', '/accredited/'+document.getElementById("service").value+'/'+document.getElementById("industry").value+'/'+document.getElementById("country").value, {shallow: true})}>
                    <option selected={router.query.industry === "all-industries" ? true : false} value="all-industries">All Industries</option>
                    <option selected={router.query.industry === "finance" ? true : false} value="finance">Finance</option>
                    <option selected={router.query.industry === "automotive" ? true : false} value="automotive">Automotive</option>
                    <option selected={router.query.industry === "ecommerce" ? true : false} value="ecommerce">Ecommerce</option>
                </SelectStyle>
            </FieldStyle>
            <FieldStyle>
                <div className="title">By Country</div>
                <SelectStyle id="country" onChange={() => router.push('/accredited/[service]/[industry]/[country]', '/accredited/'+document.getElementById("service").value+'/'+document.getElementById("industry").value+'/'+document.getElementById("country").value, {shallow: true})}>
                    <option selected={router.query.country === "global" ? true : false} value="global">All Countries</option>
                    <option selected={router.query.country === "brazil" ? true : false} value="brazil">Brazil</option>
                    <option selected={router.query.country === "usa" ? true : false} value="usa">United States</option>
                    <option selected={router.query.country === "portugal" ? true : false} value="portugal">Portugal</option>
                </SelectStyle>
            </FieldStyle>
            <FieldStyle>
                <div className="title">Find a Partner</div>
                <InputStyle type="text" placeholder="Search"/><i class="fa fa-home"></i>
            </FieldStyle>
        </ContainerStyle>
    );
}

export default PartnerSearch;